import { Client, Account, ID } from 'appwrite';

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('67624bff000c484a3559'); 

const account = new Account(client);

// Magic Link Sender Function
export const sendMagicLink = async ({ email, redirectUrl }) => { // Destructure the parameters
  try {
    if (!email) {
      throw new Error('Email is required'); // Correct error message
    }
    if (!redirectUrl) {
      throw new Error('Redirect URL is required');
    }

    const response = await account.createMagicURLToken({
      userId: ID.unique(),  // Unique user ID
      email: email,
      url: redirectUrl,  // Redirect URL after login
    });

    console.log('✅ Magic Link Sent:', response);
    return response;
  } catch (error) {
    console.error('❌ Failed to send Magic Link:', error.message);
    throw error;
  }
};
