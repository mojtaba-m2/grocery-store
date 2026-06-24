export interface IProductProp {
  id?: string;
  img: string;
  title: string;
  description?: string;
  price: string;
}

function ProductItem({ id, img, title, description, price }: IProductProp) {
  return (
    <div className="shadow-md">
      <img src={img} alt="" />

      <div className="">
        <h3 className="text-center my-2 font-extrabold"> {title} </h3>

        <p className="px-4 line-clamp-2 leading-6">{description}</p>

        <div className=" p-4 ">
          <p className="inline">Price : </p>
          <span>{price}</span>
          <span className="ml-2">$</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
