import { useState, useEffect } from "react";
import { fetchAllLoads } from "../services/loads";
import TableMUI from "../components/TableMUI";
import type { Load } from "../../../shared/types/loads";
import { loadColumns } from "../config/columns";

export function LoadsPage() {
const [loads, setLoads] = useState<Load[]>([]);

async function fetchLoads() {
    
    const fetchedLoads = await fetchAllLoads();
    setLoads(fetchedLoads);
}

    //useEffect expects nothing or cleanup function to return, so async fetchLoads must be declared outside useEffect
    useEffect(() => {
        fetchLoads();
    }, [])

// cast loads as uknown before to Record<string, unknown>. Standard ts workaorund when refusing direct cast.
    return (
        <>
        <div>Loads Page</div>
            <TableMUI columns={loadColumns} data={loads as unknown as Record<string, unknown>[]} />
        </>
    )
}


