import { ProductsWrapper } from "app/components/store/ProductsWrapper";
import { getCollectionProducts, getCollections } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
  params: {
    categories: string[],
    searchParams?: string,
  }
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;

  const collections = await getCollections();

  let products = [];
  if (categories?.length > 0) {
    const collectionId = collections.find((collection: any) => collection.handle == categories[0]).id;
    products = await getCollectionProducts(collectionId);

  } else {
    products = await getProducts();
  }

  return (
    <ProductsWrapper products={products} />
  );
}
