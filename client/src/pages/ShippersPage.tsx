import { useState, useEffect } from "react";
import { fetchAllShippers } from "../services/shippers";
import TableMUI from "../components/TableMUI";
import type { Shipper } from "../../../shared/types/shippers";
import { shipperColumns } from "../config/columns";

export function ShippersPage() {
const [products, setShippers] = useState<Shipper[]>([]);

async function fetchShippers() {
    
    const fetchedShippers = await fetchAllShippers();
    setShippers(fetchedShippers);
}

    //useEffect expects nothing or cleanup function to return, so async fetchLoads must be declared outside useEffect
    useEffect(() => {
        fetchShippers();
    }, [])

// cast loads as uknown before to Record<string, unknown>. Standard ts workaorund when refusing direct cast.
    return (
        <>
        <div>Shippers Page</div>
            <TableMUI columns={shipperColumns} data={products as unknown as Record<string, unknown>[]} />
        </>
    )
}


