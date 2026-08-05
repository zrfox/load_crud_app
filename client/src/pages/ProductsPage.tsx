import { useState, useEffect } from "react";
import { fetchAllProducts } from "../services/products";
import TableMUI from "../components/TableMUI";
import type { Product } from "../../../shared/types/products";
import { productColumns } from "../config/columns";

export function ProductsPage() {
const [products, setProducts] = useState<Product[]>([]);

async function fetchProducts() {
    
    const fetchedDrivers = await fetchAllProducts();
    setProducts(fetchedDrivers);
}

    //useEffect expects nothing or cleanup function to return, so async fetchLoads must be declared outside useEffect
    useEffect(() => {
        fetchProducts();
    }, [])

// cast loads as uknown before to Record<string, unknown>. Standard ts workaorund when refusing direct cast.
    return (
        <>
        <div>Products Page</div>
            <TableMUI columns={productColumns} data={products as unknown as Record<string, unknown>[]} />
        </>
    )
}


