import * as admin from 'firebase-admin';

// Parse the service account key from the environment variable

if (!process.env.ADMIN_SDK_FIREBASE) {
    throw new Error('The environment variable ADMIN_SDK_FIREBASE is not set');
}
const serviceAccount = JSON.parse(process.env.ADMIN_SDK_FIREBASE);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
export default db;
