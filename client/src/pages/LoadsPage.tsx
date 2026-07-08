import { useState, useEffect } from "react";
import { fetchAllLoads } from "../services/loads";
import Table from "../components/Table";
import type { Load } from "../../../shared/types/loads";
import { loadColumns } from "../config/columns";

function LoadsPage() {
const [loads, setLoads] = useState<Load[]>([]);

async function fetchLoads() {
    const fetchedLoads = await fetchAllLoads();
    setLoads(fetchedLoads);
}

    useEffect(() => {
        fetchLoads();
    }, [])

// cast loads as uknown before to Record<string, unknown>. Standard ts workaorund when refusing direct cast.
    return (
        <>
        <div>Loads Page</div>
            <Table columns={loadColumns} data={loads as unknown as Record<string, unknown>[]} />
        </>
    )
}


export default LoadsPage;