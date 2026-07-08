import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem, {
  IProductList,
  IProductProps,
} from "@/components/ProductItem";
import Link from "next/link";

interface IStoreProps {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string }>;
}

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const perPage = (await searchParams).per_page ?? "3";

  const result = await fetch(
    `http://localhost:8000/products?_page=${page}&_per_page=${perPage}`,
  );

  const data = (await result.json()) as IProductList;

  console.log(data);

  return (
    <div>
      <Container>
        <h1 className=" text-2xl font-semibold my-6">Store</h1>

        <div className="grid grid-cols-4 gap-4">
          {data.data.map((item) => (
            <Link key={item.id} href={`/store/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>

        <div className="my-10 text-center">
          <Pagination pageCount={data.pages} />
        </div>
      </Container>
    </div>
  );
}

export default Store;
