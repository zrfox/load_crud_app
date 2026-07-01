// this will be where we talk to express from the front-end
// abstract away fetch calls so component don't have to know URLs, HTTP, or JSON parsing
// component just calls loadService.getAll() and gets back array of loads
import type { Load } from "../../../shared/types/loads";

export async function createLoad(data: Omit<Load, 'id'>): Promise<Load> {
    const res = await fetch('/api/loads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error('Failed to create load');
    }
        return res.json();
}

export async function fetchAllLoads(): Promise<Load[]> {
    const res = await fetch('/api/loads');
    if (!res.ok) {
        throw new Error('Failed to fetch loads');
    }        
    return res.json();
}

export async function fetchLoadById(id: string): Promise<Load> {
    const res = await fetch(`/api/loads/${id}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch load id ${id}`);
    }  
    return res.json();
}

export async function updateLoadById(id: string, data: Partial<Omit<Load, 'id'>>): Promise<Load> {
    const res = await fetch(`/api/loads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!res.ok) {
        throw new Error(`Failed to updated load ${id}`);
    } 
    return res.json();
}

export async function deleteLoadById(id: string): Promise<void> {
    const res = await fetch(`/api/loads/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error(`Failed to delete load ${id}`)
    }
}

