import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string,
  },
}

async function getProductById(id: string) {
  const products = await getProducts(id);
  const product = products[0];
  return product;
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const product = await getProductById(searchParams.id);

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image],
    },
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const product = await getProductById(searchParams.id);

  if (!product) {
    redirect('/store');
  }

  return (
    <ProductView product={product} />
  );
}
