import type { Product } from "../../../shared/types/products";

export async function createProduct(data: Omit<Product, 'id'>): Promise<Product> {
    const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error('Failed to create product');
    }
    return res.json();
}

export async function fetchAllProducts(): Promise<Product[]> {
    const res = await fetch('/api/products');
    if (!res.ok) {
        throw new Error('Failed to fetch products')
    }
    return res.json();
}

export async function fetchProductById(id: string): Promise<Product> {
    const res = await fetch(`/api/products/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch product ${id}`);
    }
    return res.json();
}

export async function updateProductById(id: string, data: Partial<Omit<Product, 'id'>>): Promise<Product> {
    const res = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error(`Failed to update product ${id}`);
    }
    return res.json();
}

export async function deleteProductById(id: string): Promise<void> {
    const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE'
    })
    if (!res.ok) {
        throw new Error(`Failed to delete product ${id}`);
    }
    return;
}