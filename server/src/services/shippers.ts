import db from "../utils/firebase/init-firebase";
import { Shipper } from "../types/shippers";

// CREATE
export async function createShipper(data: Omit<Shipper, 'id'>): Promise<Shipper> {
    const docRef = await db.collection('shipper').add({
        ...data,
        createdAt: new Date().toISOString()
    });
    return { id: docRef.id, ...data} as Shipper;
}

// READ
export async function fetchAllShippers(): Promise<Shipper[]> {
    const snapshot = await db.collection('shippers').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})) as Shipper[];
}

export async function fetchShipperById(id: string): Promise<Shipper | null> {
    const snap = await db.collection('shippers').doc(id).get();
    if (!snap.exists) return null;
    return ({id: snap.id, ...snap.data()}) as Shipper;
}

// UPDATE
export async function updateShipperById(id: string, data: Partial<Omit<Shipper, 'id'>>): Promise<Shipper> {
    await db.collection('shipper').doc(id).update(data);
    const updatedShipper = await fetchShipperById(id);
    if (!updatedShipper) {
        throw new Error ('Failed to fetch shipper after update.');
    }
    return updatedShipper;
}