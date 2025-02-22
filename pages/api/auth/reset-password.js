import { Client, Users, Databases, Query } from "appwrite";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { userId, token, newPassword } = req.body;

  // Initialize Appwrite Client
  const client = new Client();
  client
    .setEndpoint(process.env.APPWRITE_ENDPOINT) // ✅ Your Appwrite API Endpoint
    .setProject(process.env.APPWRITE_PROJECT_ID); // ✅ Your Appwrite Project ID

  // Initialize Services
  const users = new Users(client);
  const databases = new Databases(client);

  try {
    // ✅ Step 1: Verify Token in Appwrite Database
    const response = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_USERS_COLLECTION_ID
      [Query.equal("$id", token)]
    );

    if (response.documents.length === 0) {
      return res.status(400).json({ error: "Invalid or expired reset token" });
    }

    // ✅ Step 2: Reset Password Using Appwrite Admin API
    await users.updatePassword(userId, newPassword);

    // ✅ Step 3: Delete Token After Successful Reset
    await databases.deleteDocument(
      process.env.APPWRITE_DATABASE_ID,
      process.env.APPWRITE_USERS_COLLECTION_ID,
      token
    );

    return res.json({ success: true, message: "Password updated successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}