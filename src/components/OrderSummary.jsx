import "./OrderSummary.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const { state } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/summary");
  };

  return (
    <div className="order-sum">
      <h4 className="title">Order Summary</h4>
      <hr />

      {state.totalItems > 0 && (
        <div>
          {state.cart.map((item) => (
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              key={item.id}
            >
              <p className="item-total">
                {item.name} × {item.quantity}
              </p>
              <p className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="shipping">Shipping</p>
        <p className="shipping">Free</p>
      </div>

      <hr />
      <div className="total">
        <h4>Total</h4>
        <h4>$ {state.totalPrice}</h4>
      </div>
      <button className="place-order" onClick={handlePlaceOrder}>
        Place Order
        <FaLongArrowAltRight className="panah" />
      </button>
    </div>
  );
}

export default OrderSummary;
