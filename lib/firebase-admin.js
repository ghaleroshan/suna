import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
    }),
    databaseURL: "https://suna-a0470.firebaseio.com",
  });
}

export default admin.firestore();
