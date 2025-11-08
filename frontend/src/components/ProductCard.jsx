import { Link } from "react-router-dom";
import "./productcard.css";

export default function ProductCard({ product }) {
  const variant = product.variants[0];

  return (
    <Link to={`/products/${product.slug}`} className="product-card-link">
      <div className="product-card">
        {/* === Product Image === */}
        <div className="product-card-image-wrapper">
          <img
            src={variant.image}
            alt={product.name}
            className="product-card-image"
            loading="lazy"
          />
        </div>

        {/* === Product Info === */}
        <div className="product-card-content">
          <h3 className="product-card-title">{product.name}</h3>
          <p className="product-card-price">
            From <span>₹{variant.price.toLocaleString()}</span>
          </p>

          <div className="product-card-variants">
            <div className="variant-dots">
              {product.variants.map((v, i) => (
                <span
                  key={i}
                  className="variant-dot"
                  title={`${v.color} - ${v.storage}`}
                />
              ))}
            </div>
            <span className="variant-text">
              {product.variants.length} Variants
            </span>
          </div>
        </div>

        <div className="product-card-overlay">
          <span>View Details →</span>
        </div>
      </div>
    </Link>
  );
}
