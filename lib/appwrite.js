import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite Cloud API URL
  .setProject("665e504f0032f64eda2c"); // Replace with your actual Project ID

// Export both client and account so they can be used elsewhere
export const account = new Account(client);
export default client;
