import db from "../utils/firebase/init-firebase";
import { Product } from "../types/products";

export async function fetchAllProducts(): Promise<Product[]> {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})) as Product[];
}

export async function fetchProductById(id: string): Promise<Product | null> {
    const snap = await db.collection('products').doc(id).get();
    if (!snap.exists) return null;
    return ({ id: snap.id, ...snap.data()}) as Product;
}