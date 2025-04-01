import { Client, Databases } from 'appwrite';
export const PROJECT_ID = '67ea82d3000cf3fab8bd'
export const DATABSE_ID = '67ea84b30014439b7176'
export const COLLECTION_ID_MESSAGES = '67ea84ca001d59b1ba2e'


const client = new Client();
client.setProject(PROJECT_ID);

export const databases = new Databases(client);
export default client;
