import Container from "@/components/Container";
import { IProductProp } from "@/components/ProductItem";

interface IProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function ProductPage({ params }: IProps) {
  const { id } = await params;

  const result = await fetch(`http://localhost:8000/products/${id}`);

  const data = (await result.json()) as IProductProp;

  return (
    <Container>
      <div className="grid grid-cols-12  mt-10 shadow-2xl">
        <div className="col-span-3 h-full">
          <img src={data.img} alt="" />
        </div>

        <div className="col-span-9 p-4">
          <h3 className="text-center text-2xl font-semibold mb-2">
            {data.title}
          </h3>

          <p className="text-gray-600 leading-7">{data.description}</p>

          <div className="flex items-center justify-center p-4">
            <p className="mr-2 text-2xl">Price : </p>
            <span className="mr-2 text-2xl">{data.price}</span>
            <span className="mr-2 text-2xl">$</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductPage;
