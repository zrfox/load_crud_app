import dotenv from 'dotenv';
import path from 'path';

import { initializeApp } from 'firebase-admin/app';
import { cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

dotenv.config({ path: path.join(__dirname, '../../..', '.env') });
// the ! at the end of FIREBASE_SERVICE_ACCOUNT_PATH tells TS compiler to trust that this is a valid value
const serviceAccountPath = path.join(__dirname, '../../..', process.env.FIREBASE_SERVICE_ACCOUNT_PATH!);
const serviceAccount = require(serviceAccountPath);

initializeApp({
    credential: cert(serviceAccount)
})
const db = getFirestore();

export default db;
