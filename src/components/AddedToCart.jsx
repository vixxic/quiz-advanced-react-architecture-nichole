import "./AddedToCart.css";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function AddedToCart({ item }) {
  const { dispatch } = useContext(GlobalContext);

  return (
    <div className="product-added">
      <img src={item.image} alt={item.name} className="image"></img>
      <div className="product-added-des">
        <p style={{ fontWeight: "bold" }}>{item.name}</p>

        <div className="quantity-button-con">
          <button
            onClick={() => dispatch({ type: "DECREMENT_QTY", payload: item })}
          >
            -
          </button>

          <p>
            {" "}
            Qty:
            <span>{item.quantity}</span>
          </p>

          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            +
          </button>
        </div>
      </div>
      <p className="price">${item.price}</p>
    </div>
  );
}

export default AddedToCart;
