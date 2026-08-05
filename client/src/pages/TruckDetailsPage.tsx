import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Truck } from "../../../shared/types/trucks";
import { fetchTruckById } from "../services/trucks";
import DetailsPageComp from "../components/DetailsPageComp";
import { truckColumns } from "../config/columns";


export function TruckDetailsPage() { 
    const [truck, setTruck] = useState<Truck>();
    const { id } = useParams();
    
    async function fetchTruck(id: string) {
        const fetchedTruck = await fetchTruckById(id);
        setTruck(fetchedTruck);
    }

    useEffect(() =>{
        if(!id) return;
        fetchTruck(id);
        console.log(`Ran fetch load., id is ${id} \n`)
    }, [id])

    return (
        <>
            <DetailsPageComp
                data={truck}
                columns={truckColumns}
                backTo={{path: "/shippers", label: "Shippers"}}
            />
        </>
    )
}

