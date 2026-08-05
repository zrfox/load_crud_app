import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../../shared/types/products";
import { fetchProductById } from "../services/products";
import DetailsPageComp from "../components/DetailsPageComp";
import { productColumns } from "../config/columns";


export function ProductDetailsPage() { 
    const [product, setProduct] = useState<Product>();
    const { id } = useParams();
    
    async function fetchLoad(id: string) {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
    }

    useEffect(() =>{
        if(!id) return;
        fetchLoad(id);
        console.log(`Ran fetch load., id is ${id} \n`)
    }, [id])

    return (
        <>
            <DetailsPageComp
                data={product}
                columns={productColumns}
                backTo={{path: "/products", label: "Products"}}
            />
        </>
    )
}

