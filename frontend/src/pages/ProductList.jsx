import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./productlist.css";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="product-list-container">
      <h2 className="product-heading">Explore Smartphones on EMI</h2>
      <p className="product-subheading">
        Choose from top brands and get flexible EMI plans backed by mutual funds.
      </p>

      {/* Reusable Product Cards */}
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="no-products">Loading products...</p>
        )}
      </div>
    </div>
  );
}
