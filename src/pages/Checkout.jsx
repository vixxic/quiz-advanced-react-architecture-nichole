import "./Checkout.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Navbar from "../components/Navbar";
import PagesDes from "../components/PagesDes";
import { BsCart4 } from "react-icons/bs";
import AddedToCart from "../components/AddedToCart";
import OrderSummary from "../components/OrderSummary";

function CheckOut() {
  const { state } = useContext(GlobalContext);
  return (
    <div>
      <Navbar />
      <div className="pages-content">
        <PagesDes
          pages="CHECKOUT"
          title="Your Cart"
          description={
            state.totalItems > 0 &&
            `${state.totalItems} items are ready for purchase`
          }
        />

        {state.totalItems === 0 && (
          <div className="checkout-warning">
            <BsCart4 size={50} color="#d4521a" />
            <p>Your cart is empty</p>
            <p>Add some products before checking out.</p>
          </div>
        )}

        {state.totalItems > 0 && (
          <div className="display">
            <div>
              {state.cart.map((item) => (
                <AddedToCart key={item.id} item={item} />
              ))}
            </div>
            <OrderSummary />
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckOut;
