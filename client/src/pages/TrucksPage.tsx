import { useState, useEffect } from "react";
import { fetchAllTrucks } from "../services/trucks";
import TableMUI from "../components/TableMUI";
import type { Truck } from "../../../shared/types/trucks";
import { truckColumns } from "../config/columns";

export function TrucksPage() {
const [trucks, setTrucks] = useState<Truck[]>([]);

async function fetchTrucks() {
    
    const fetchedTrucks = await fetchAllTrucks();
    setTrucks(fetchedTrucks);
}

    //useEffect expects nothing or cleanup function to return, so async fetchLoads must be declared outside useEffect
    useEffect(() => {
        fetchTrucks();
    }, [])

// cast loads as uknown before to Record<string, unknown>. Standard ts workaorund when refusing direct cast.
    return (
        <>
        <div>Trucks Page</div>
            <TableMUI columns={truckColumns} data={trucks as unknown as Record<string, unknown>[]} />
        </>
    )
}


