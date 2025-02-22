import { Client, Users, Query } from "node-appwrite"; // ✅ Import from "node-appwrite"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;

  // Initialize Appwrite Client
  const client = new Client();
  client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY); // Ensure this is an Admin API Key

  const users = new Users(client); // ✅ Correct way to initialize Users API

  try {
    const response = await users.list([
      Query.equal("email", email)
    ]);

    if (response.total === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const userId = response.users[0].$id; // Extract user ID
    return res.json({ userId });
  } catch (error) {
    console.error("Appwrite Error:", error);
    return res.status(500).json({ error: error.message });
  }
}
