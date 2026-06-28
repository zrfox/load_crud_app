import db from "../utils/init-firebase";
import { Driver } from "../types/drivers";
export async function fetchAllDrivers(): Promise<Driver[]> {
    const snapshot = await db.collection('drivers').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Driver[]
}
// returns Driver or null if doc not found
export async function fetchDriverById(id: string): Promise<Driver | null> {
    const snap = await db.collection('drivers').doc(id).get();
    if (!snap.exists) return null;
    return { id: snap.id, ...snap.data()} as Driver;
}