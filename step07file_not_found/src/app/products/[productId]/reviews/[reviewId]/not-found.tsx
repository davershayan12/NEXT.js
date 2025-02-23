 "use client";
import { usePathname } from "next/navigation";
export default function NotFound(){
    const pathname=usePathname();
    const productId=pathname.split("/")[2]
    const reviewId=pathname.split("/")[4]
    return (
        <div>
            <h1>review not found of product {productId} of review {reviewId}.</h1>
            <h2>there must be an mistake</h2>
        </div>
    );
}