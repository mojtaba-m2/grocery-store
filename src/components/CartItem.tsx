import AddToCart from "./AddToCart";

function CartItem() {
  return (
    <div className=" grid grid-cols-12 mt-6">
      <img className="col-span-2 h-36" src="/images/oil.webp" alt="" />

      <div className="col-span-10 bg-slate-200 p-4">
        <h2>title</h2>

        <p>
          number<span>3</span>
        </p>

        <p>
          price: <span>200$</span>
        </p>
        <AddToCart />
      </div>
    </div>
  );
}

export default CartItem;
