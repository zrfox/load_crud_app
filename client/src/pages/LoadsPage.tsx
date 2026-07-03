import { useState, useEffect } from "react";
import { fetchAllLoads } from "../services/loads";
import Table from "../components/Table";
import type { Load } from "../../../shared/types/loads";

function LoadsPage() {
const [loads, setLoads] = useState<Load[]>([]);

async function fetchLoads() {
    const fetchedLoads = await fetchAllLoads();
    setLoads(fetchedLoads);
}

    useEffect(() => {
        fetchLoads();
    }, [])
    return (
        <>
        <div>Loads Page</div>
        <Table Tableprops={}>

        </Table>
        </>
    )
}


export default LoadsPage;