import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { Load } from "../../../shared/types/loads";
import { fetchLoadById } from "../services/loads";
import { loadColumns } from "../config/columns";


function LoadDetailsPage() { 
    
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

    return (
        <>
        <Link to="/loads">(Back to Loads)</Link>
            {loadColumns.map((col) => {
                return (
                <div key={col.key}>
                    <strong>{col.label}:</strong>{String(load?.[col.key as keyof Load])}

                </div>
            )})}
        </>
    )
}

export default LoadDetailsPage;