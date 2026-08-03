import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Load } from "../../../shared/types/loads";
import { fetchLoadById } from "../services/loads";
import DetailsPageComp from "../components/DetailsPageComp";
import { loadColumns } from "../config/columns";


export function LoadDetailsPage() { 
    // do i have to create an object to pass as the detailspagecompprops? 
    const [load, setLoad] = useState<Load>();
    const { id } = useParams();
    
    // maybe refactor these so we don't have a new async fetch definition for every page
    async function fetchLoad(id: string) {
        const fetchedLoad = await fetchLoadById(id);
        setLoad(fetchedLoad);
    }

    useEffect(() =>{
        if(!id) return;
        fetchLoad(id);
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
                data={load}
                columns={loadColumns}
                backTo={{path: "/loads", label: "Loads"}}
            />
        </>
    )
}

