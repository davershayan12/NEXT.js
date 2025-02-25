import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title=await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(`iphone ${id}`)
  },200)
  })
  return {

    title: `Product ${title}`,
    description:`Product details of ${title} `
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}