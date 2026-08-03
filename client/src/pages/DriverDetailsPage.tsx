import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDriverById } from "../services/drivers";
import DetailsPageComp from "../components/DetailsPageComp";
import { driverColumns } from "../config/columns";
import type { Driver } from "../../../shared/types";



export function DriverDetailsPage() { 
    // do i have to create an object to pass as the detailspagecompprops? 
    const [driver, setDriver] = useState<Driver>();
    const { id } = useParams();
    
    // maybe refactor these so we don't have a new async fetch definition for every page
    async function fetchDriver(id: string) {
        const fetchedLoad = await fetchDriverById(id);
        setDriver(fetchedLoad);
    }

    useEffect(() =>{
        if(!id) return;
        fetchDriver(id);
        console.log(`Ran fetch load., id is ${id} \n`)
    }, [id])

    // DetailsPageComp props are checked against the component's inferred type in its signature
    // 'inferred' meaning it takes the type of the data prop and puts it in place of the placeholder T.
    // ex: ts sees load (which is type Load), load must be T, checks load against DetailsPageProps<Load>
    // this will check the interface and find data: T | undefined works for passing prop load of type Load
    // ex: passing load (type Load) to `data` → TS infers T = Load for this specific usage
    // then checks the rest of the props (columns, etc.) against that inferred T
    // i.e. columns must be Column<Load>[], not Column<Driver>[] or anything else
    return (
        <>
            <DetailsPageComp
                data={driver}
                columns={driverColumns}
                backTo={{path: "/drivers", label: "Drivers"}}
            />
        </>
    )
}