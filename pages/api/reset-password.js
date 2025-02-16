import { account } from '../../lib/appwrite'

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Appwrite requires an allowed redirect URL (configured in Appwrite console)
    const resetUrl = "https://localhost:3000/reset-password";

    await account.createRecovery(email, resetUrl);

    return res.status(200).json({ message: "Reset link sent to your email" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

