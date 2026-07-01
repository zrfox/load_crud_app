import type { Driver } from "../../../shared/types/drivers";

export async function createDriver(data: Omit<Driver, 'id'>): Promise<Driver> {
    const res = await fetch('/api/drivers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error('Failed to create driver');
    }
    return res.json();
}

export async function fetchAllDrivers(): Promise<Driver[]> {
    const res = await fetch('/api/drivers');
    if(!res.ok) {
        throw new Error('Failed to fetch drviers');
    }
    return res.json();
}

export async function fetchDriverById(id: string): Promise<Driver> {
    const res = await fetch(`/api/drivers/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch driver ${id}`);
    }
    return res.json();
}

export async function updateDriverById(id: string, data: Partial<Omit<Driver, 'id'>>): Promise<Driver> {
    const res = await fetch(`/api/drivers/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
        })
    if(!res.ok) {
        throw new Error(`Failed to update driver ${id}`);
    }
    return res.json();
}

export async function deleteDriverById(id: string): Promise<void> {
    const res = await fetch(`/api/drivers/${id}`, {
        method: 'DELETE',
    })
    if (!res.ok) {
        throw new Error(`Failed to delete driver ${id}`);
    }
    return;
}
