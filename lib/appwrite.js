import { Client, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Use your Appwrite endpoint
  .setProject('665e504f0032f64eda2c'); // Replace with your actual Project ID

export const account = new Account(client);
