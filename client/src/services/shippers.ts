import type { Shipper } from "../../../shared/types/shippers";

export async function createShipper(data: Omit<Shipper, 'id'>): Promise<Shipper> {
    const res = await fetch('/api/shippers', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error('Failed to create shipper');
    }
    return res.json();
}

export async function fetchAllShippers(): Promise<Shipper[]> {
    const res = await fetch('/api/shippers');
    if (!res.ok) {
        throw new Error('Failed to fetch shippers');
    }
    return res.json();
}

export async function fetchShipperById(id: string): Promise<Shipper> {
    const res = await fetch(`/api/shippers/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch shipper ${id}`);
    }
    return res.json();
}

export async function updateShipperById(id: string, data: Partial<Omit<Shipper, 'id'>>): Promise<Shipper> {
    const res = await fetch(`/api/shippers/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error(`Failed to update shipper ${id}`);
    }
    return res.json();
}

export async function deleteShipperById(id: string): Promise<void> {
    const res = await fetch(`/api/shippers/${id}`, {
        method: 'DELETE'
    })
    if (!res.ok) {
        throw new Error(`Failed to delete shipper ${id}`);
    }
    return;
}