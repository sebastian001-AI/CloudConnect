import { Client, Account, ID } from 'appwrite';

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('67c24bff000c484a3559'); // Replace with the correct project ID

const account = new Account(client);

// Magic Link Sender Function
export const sendMagicLink = async ({ email, redirectUrl }) => {
  try {
    if (!email) {
      throw new Error('Email is required');
    }
    if (!redirectUrl) {
      throw new Error('Redirect URL is required');
    }

    const response = await account.createMagicURLToken(
      ID.unique(), // Generate a unique user ID
      email,       // Email address
      redirectUrl  // Redirect URL after login
    );

    console.log('✅ Magic Link Sent:', response);
    return response;
  } catch (error) {
    console.error('❌ Failed to send Magic Link:', error.message);
    console.error('Error Details:', error); // Log detailed error information
    throw error;
  }
};