import { useContext } from "react";
import "./ProductsCard.css";
import { GlobalContext } from "../context/GlobalContext";

function ProductsCard({ id, price, image, category, productName }) {
  const { dispatch } = useContext(GlobalContext);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        name: productName,
        price,
        image,
      },
    });
  };
  return (
    <div className="card ">
      <div className="padding">
        <div className="category">{category}</div>
        <div className="img-container">
          <img className="product-image" src={image} alt={productName}></img>
        </div>

        <div>
          <p>{productName}</p>
          <p>
            <span className="price-product">${price}</span> USD
          </p>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            + Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
