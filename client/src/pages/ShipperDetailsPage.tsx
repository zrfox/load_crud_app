
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Shipper } from "../../../shared/types/shippers";
import { fetchShipperById } from "../services/shippers";
import DetailsPageComp from "../components/DetailsPageComp";
import { shipperColumns } from "../config/columns";


export function ShipperDetailsPage() { 
    const [shipper, setShipper] = useState<Shipper>();
    const { id } = useParams();
    
    async function fetchShipper(id: string) {
        const fetchedShipper = await fetchShipperById(id);
        setShipper(fetchedShipper);
    }

    useEffect(() =>{
        if(!id) return;
        fetchShipper(id);
        console.log(`Ran fetch load., id is ${id} \n`)
    }, [id])

    return (
        <>
            <DetailsPageComp
                data={shipper}
                columns={shipperColumns}
                backTo={{path: "/shippers", label: "Shippers"}}
            />
        </>
    )
}

