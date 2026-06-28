// business logic and firestore calls. No knowledge of req/res. 
// No knowledge of HTTP. 

import db from "../utils/init-firebase";
import { Load } from "../types/loads";

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