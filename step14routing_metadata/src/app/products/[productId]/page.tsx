import { Metadata } from "next";
type Props={
    params:Promise<{productId: string}>;
}
export const generatedMetadata=async({params,}:Props):Promise<Metadata>=>{
const id =(await params).productId
return {title:`product: ${id}`
}
}
export default async function ProductsDetails({params}:Props){
    const productId=(await params).productId;
    return  <h1>product details {productId}</h1>
    
}