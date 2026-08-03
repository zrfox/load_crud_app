import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { Column } from "../types/Column";


interface DetailsPageComp<T> {
    data: T | undefined;
    columns: Column<T>[];
    backTo: { path: string; label: string };
}


function DetailsPageComp() { 
    
    const [load, setLoad] = useState<T>();
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

export default DetailsPageComp;