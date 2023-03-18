import { ShoppingCart } from "phosphor-react";

function Basket() {
  return (
    <div className="links">
      <h2>
        {" "}
        <ShoppingCart size={15} color="green" />
        Basket
      </h2>
    </div>
  );
}

export default Basket;
