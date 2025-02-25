import { Metadata } from "next";
type Props = {
    params: { productId: string };
  };
  
  export const generateMetadata = async ({
    params,
  }: Props): Promise<Metadata> => {
    try {
      const id = params.productId;
      console.log("Generating metadata for product ID:", id);
      const title = await new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve(`iphone ${id}`);
          } else {
            reject("Product ID is missing");
          }
        }, 100);
      });
      return {
        title: `Product ${title}`,
      };
    } catch (error) {
      console.error("Error generating metadata:", error);
      return {
        title: "Product not found",
      };
    }
  };
  
  export default function ProductDetails({ params }: Props) {
    const productId = params.productId;
    console.log("Rendering product details for product ID:", productId);
    return <>Details about product {productId}</>;
  }