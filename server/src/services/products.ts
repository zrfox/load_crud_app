import db from "../utils/firebase/init-firebase";
import { Product } from "../types/products";

// CREATE
export async function createProduct(data: Omit<Product, 'id'>): Promise<Product> {
    const docRef = db.collection('products').add({
        // spread operator unpacks data so it's not a nested object but on level with createdAt
        ...data,
        createdAt: new Date().toISOString()
    });
    return { id: (await docRef).id, ...data} as Product;
}

// READ
export async function fetchAllProducts(): Promise<Product[]> {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})) as Product[];
}

export async function fetchProductById(id: string): Promise<Product | null> {
    const snap = await db.collection('products').doc(id).get();
    if (!snap.exists) return null;
    return ({ id: snap.id, ...snap.data()}) as Product;
}

// UPDATE
export async function updateProductById(id: string, data: Partial<Omit<Product, 'id'>>): Promise<Product> {
    await db.collection('products').doc(id).update(data);
    const updatedProduct = await fetchProductById(id);
    if (!updatedProduct) {
        throw new Error ('Failed to fetch product after update.');
    }
    return updatedProduct;
}