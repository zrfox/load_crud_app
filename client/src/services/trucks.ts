import type { Truck } from "../../../shared/types/trucks";

export async function createTruck(data: Omit<Truck, 'id'>): Promise<Truck> {
    const res = await fetch('/api/trucks', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error('Failed to create truck');
    }
    return res.json();
}

export async function fetchAllTrucks(): Promise<Truck[]> {
    const res = await fetch('/api/trucks');
    if (!res.ok) {
        throw new Error('Failed to fetch trucks');
    }
    return res.json()
}

export async function fetchTruckById(id: string): Promise<Truck> {
    const res = await fetch(`/api/trucks/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch truck ${id}`);
    }
    return res.json();
}

export async function updateTruckById(id: string, data: Partial<Omit<Truck, 'id'>>): Promise<Truck> {
    const res = await fetch(`/api/trucks/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (!res.ok) {
            throw new Error(`Failed to update truck ${id}`);
        }
    return res.json();
}

export async function deleteTruckById(id: string): Promise<void> {
    const res = await fetch(`/api/trucks/${id}`, {
        method: 'DELETE'
    })
    if (!res.ok) {
        throw new Error(`Failed to delete truck ${id}`);
    }
    return;
}