function CartItem() {
  return (
    <div className=" grid grid-cols-12 mt-6 bg-slate-200">
      <img className="col-span-2 h-36" src="/images/oil.webp" alt="" />

      <div className="col-span-10">
        <h2>title</h2>

        <p>
          number<span>3</span>
        </p>

        <p>
          price: <span>200$</span>
        </p>
      </div>
    </div>
  );
}

export default CartItem;
