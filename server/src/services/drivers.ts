import db from "../utils/firebase/init-firebase";
import { Driver } from "../types/drivers";

// CREATE
export async function createDriver(data: Omit<Driver, 'id'>): Promise<Driver> {
    const docRef = await db.collection('drivers').add({
        ...data,
        createdAt: new Date().toISOString()
    });
    return { id: docRef.id, ...data } as Driver;
}

// READ
export async function fetchAllDrivers(): Promise<Driver[]> {
    const snapshot = await db.collection('drivers').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Driver[]
}
// returns promise of type Driver or null if doc not found
export async function fetchDriverById(id: string): Promise<Driver | null> {
    const snap = await db.collection('drivers').doc(id).get();
    if (!snap.exists) return null;
    return { id: snap.id, ...snap.data()} as Driver;
}

// UPDATE
// Partial makes fields optional. Check updatedDriver for typescript control flow to accept return of updatedDriver (updatedDriver may be Driver or null, so needs to check null)
export async function updateDriverById(id: string, data: Partial<Omit<Driver, 'id'>>): Promise<Driver> {
    await db.collection('drivers').doc(id).update(data);
    const updatedDriver = await fetchDriverById(id);
    if (!updatedDriver) {
        throw new Error(`Driver ${id} not found after update.`);
    }
    return updatedDriver;
}

// DELETE
// check existence of doc by id beforehand in controller
export async function deleteDriverById(id: string) {
    await db.collection('drivers').doc(id).delete();
}