// business logic and firestore calls. No knowledge of req/res. 
// No knowledge of HTTP. 

import db from "../utils/firebase/init-firebase";
import { Load } from "../types/loads";

// CREATE
// Omit removes id from Load (id created by firebase and returned in object as docRef.id)
export async function createLoad(data: Omit<Load, 'id'>): Promise<Load> {
    const docRef = await db.collection('loads').add({
        ...data,
        createdAt: new Date().toISOString()
    });
    return { id: docRef.id, ...data} as Load;
}

// READ

export async function fetchAllLoads(): Promise<Load[]> {
    const snapshot = await db.collection('loads').get();
    // spread merges doc id (which isn't in doc.data()) into one object with doc.data()
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})) as Load[];
}

export async function fetchLoadById(id: string): Promise<Load | null> {
    const snap = await db.collection('loads').doc(id).get();
    if (!snap.exists) return null;
    return { id: snap.id, ...snap.data() } as Load;
}