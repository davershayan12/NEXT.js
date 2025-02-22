export default async function ProductsDetails({params}:{params:Promise<{productId:string}>}){
    const productId=(await params).productId;
    return  <h1>product {productId}</h1>
    
}