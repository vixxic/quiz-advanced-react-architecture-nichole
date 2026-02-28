import Navbar from "../components/Navbar";
import "./Products.css";
import PagesDes from "../components/PagesDes";
import ProductsCard from "../components/ProductsCard";

function Products() {
  const products = [
    {
      id: 1,
      name: "Headphones",
      price: 129.99,
      productName: "Obsidian Wireless Headphones",
      image: "/headphone.webp",
      category: "BEST SELLER",
    },
    {
      id: 2,
      name: "Keyboard",
      price: 199.99,
      productName: "Phantom Mechanical Keyboard",
      image: "/keyboard.jpg",
      category: "NEW",
    },
    {
      id: 3,
      name: "SmartWatch",
      price: 349.99,
      productName: "Eclipse Smart Watch",
      image: "/smartwatch.jpg",
      category: "PREMIUM",
    },
    {
      id: 4,
      name: "DeskLamp",
      price: 89.99,
      productName: "Nova Desk Lamp",
      image: "desklamp.png",
      category: "POPULAR",
    },
    {
      id: 5,
      name: "Wecam",
      price: 159.99,
      productName: "Aura Webcam 4K",
      image: "webcam.webp",
      category: "TOP PICK",
    },
    {
      id: 6,
      name: "Speaker",
      price: 74.99,
      productName: "Zen Portable Speaker",
      image: "/portable-speaker.jpg",
      category: "SALE",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="pages-content">
        <PagesDes
          pages="OUR COLLECTION"
          title="Featured Products"
          description="Handpicked tech essentials for the discerning professional."
        />

        <div className="products-container">
          {products.map((product) => (
            <ProductsCard
              key={product.id}
              id={product.id}
              price={product.price}
              productName={product.productName}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
