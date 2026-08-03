import {  Link } from "react-router-dom";
import type { Column } from "../types/Column";

// Will use this component for basic collections that don't currently need much detail, as opposed to LoadDetailsPage.

interface DetailsPageProps<T> {
    data: T | undefined;
    columns: Column<T>[];
    backTo: { path: string; label: string };
}

// T isn't fixed in DetailsPageComp's definition — it's a placeholder.
// TS infers T separately at each call site, based on what's actually passed to `data`.
// ex: passing load (type Load) to `data` → TS infers T = Load for this specific usage
// then checks the rest of the props (columns, etc.) against that inferred T
// i.e. columns must be Column<Load>[], not Column<Driver>[] or anything else
function DetailsPageComp<T>({data, columns, backTo}: DetailsPageProps<T>) { 
    
    return (
        <>
        <Link to={backTo.path}>(Back to ${backTo.label})</Link>
            {columns.map((col) => {
                return (
                <div key={String(col.key)}>
                    <strong>{col.label}:</strong>{String(data?.[col.key])}

                </div>
            )})}
        </>
    )
}

export default DetailsPageComp;