interface IProductProp {
  id?: number;
  img: string;
  title: string;
  des?: string;
  price: string;
}

function ProductItem({ id, img, title, des, price }: IProductProp) {
  return (
    <div className="shadow-md">
      <img src={img} alt="" />

      <div className="">
        <h3 className="text-center my-2 font-extrabold"> {title} </h3>

        <div className="flex flex-row-reverse  justify-between p-4">
          <p>قیمت </p>
          <span>{price}</span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
