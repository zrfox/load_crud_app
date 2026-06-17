import express from 'express';
import dotenv from 'dotenv';
import { QueryDocumentSnapshot } from 'firebase-admin/firestore';
import path from 'path';

import { initializeApp } from 'firebase-admin/app';
import { cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// creates path from this file, otherwise npm run dev will use paths relative to terminal cwd
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const serviceAccountPath = path.join(__dirname, '..', process.env.FIREBASE_SERVICE_ACCOUNT_PATH!);
const serviceAccount = require(serviceAccountPath);

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

// write
async function testFirestore() {
await db.collection('drivers').add({ full_name: 'Doctor Evil', status: 'available' });

// read
const snapshot = await db.collection('drivers').get();
snapshot.forEach((doc) => console.log(doc.id, doc.data()));
}

testFirestore();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});