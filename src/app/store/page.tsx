import Container from "@/components/Container";
import ProductItem, { IProductProps } from "@/components/ProductItem";
import Link from "next/link";

async function Store() {
  const result = await fetch("http://localhost:8000/products");

  const data = (await result.json()) as IProductProps[];

  return (
    <div>
      <Container>
        <h1 className=" text-2xl font-semibold my-6">Store</h1>

        <div className="grid grid-cols-4 gap-4">
          {data.map((item) => (
            <Link key={item.id} href={`/store/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
