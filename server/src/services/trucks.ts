import db from "../utils/firebase/init-firebase";
import { Truck } from "../types/trucks";

export async function fetchAllTrucks(): Promise<Truck[]> {
    const snapshot = await db.collection('trucks').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})) as Truck[];
}

export async function fetchTruckById(id: string): Promise<Truck | null> {
    const snap = await db.collection('trucks').doc(id).get();
    if (!snap.exists) return null;
    return ({id: snap.id, ...snap.data()}) as Truck;
}