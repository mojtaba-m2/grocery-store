import CartItem from "@/components/CartItem";
import Container from "@/components/Container";

function Cart() {
  return (
    <Container>
      <h1 className="my-6">Cart</h1>
      <div className="my-6 ">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div>
        <div className="border shadow-md p-4">
          <h3> Subtotal : 365800 $</h3>
          <h3>Discount : 12%</h3>
          <h3>Total Price : 30000 $</h3>

          <div>
            <input
              className="border mr-4"
              placeholder="کد تخفیف را وارد کنید"
              type="text"
            />
            <button className="bg-sky-400 text-white px-4 py-1 rounded">
              apply
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
