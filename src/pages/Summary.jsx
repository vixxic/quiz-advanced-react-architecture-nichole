import "./Summary.css";
import Navbar from "../components/Navbar";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

function Summary() {
  const { state, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    dispatch({ type: "CLEAR_CART" });
    navigate("/products");
  };

  return (
    <div className="summary-pages-content">
      <Navbar />
      <div className="summary-content">
        <FaRegCircleCheck color="green" size={100} />
        <p className="order-confirmed">
          Order <br />
          Confirmed!
        </p>

        <p className="thankyou-text">
          Thank you {state.user?.email || "-"} <br />
          Your order has been placed successfully.
        </p>

        <div className="summary-block">
          <div className="summary-items">
            <p>ITEMS</p>
            <h3>{state.totalItems > 0 ? state.totalItems : "-"}</h3>
          </div>

          <div className="sum-pain-status-con">
            <div className="summary-paid">
              <p>TOTAL PAID</p>
              <h3>${state.totalPrice.toFixed(2)}</h3>
            </div>
            <div className="summary-status">
              <p>STATUS</p>
              <h3>Processing</h3>
            </div>
          </div>
        </div>

        <button className="continue-shopping" onClick={handleContinueShopping}>
          Continue Shopping <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
}

export default Summary;
