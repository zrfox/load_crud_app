
import { useState, useEffect } from "react";
import { fetchAllDrivers } from "../services/drivers";
import TableMUI from "../components/TableMUI";
import type { Driver } from "../../../shared/types/drivers";
import { driverColumns } from "../config/columns";

export function DriversPage() {
const [drivers, setDrivers] = useState<Driver[]>([]);

async function fetchDrivers() {
    
    const fetchedDrivers = await fetchAllDrivers();
    setDrivers(fetchedDrivers);
}

    //useEffect expects nothing or cleanup function to return, so async fetchLoads must be declared outside useEffect
    useEffect(() => {
        fetchDrivers();
    }, [])

// cast loads as uknown before to Record<string, unknown>. Standard ts workaorund when refusing direct cast.
    return (
        <>
        <div>Drivers Page</div>
            <TableMUI columns={driverColumns} data={drivers as unknown as Record<string, unknown>[]} />
        </>
    )
}


