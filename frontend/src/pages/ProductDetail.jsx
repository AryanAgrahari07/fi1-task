import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [variantIndex, setVariantIndex] = useState(0);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);

  useEffect(() => {
    setProduct(null);
    fetch(`${BASE_URL}/products/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setVariantIndex(0);
        setSelectedPlanIndex(null);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  if (!product) return <div className="loading">Loading...</div>;

  const variant = product.variants[variantIndex];

  return (
    <div className="product-detail-wrapper">
      <div className="product-left">
        <div className="image-card">
          <img src={variant.image} alt={`${product.name} ${variant.color}`} className="product-main-img" />
        </div>

        <div className="variant-row">
          <div className="color-dots">
            {product.variants.map((v, i) => (
              <button
                aria-label={`Select ${v.color}`}
                key={i}
                className={`dot ${i === variantIndex ? "selected" : ""}`}
                onClick={() => { setVariantIndex(i); setSelectedPlanIndex(null); }}
                title={`${v.color} - ${v.storage}`}
              >
                <span className="dot-inner" />
              </button>
            ))}
          </div>

          <div className="storage-select">
            <label htmlFor="storage">Variant</label>
            <select
              id="storage"
              value={variantIndex}
              onChange={(e) => { setVariantIndex(Number(e.target.value)); setSelectedPlanIndex(null); }}
            >
              {product.variants.map((v, i) => (
                <option key={i} value={i}>
                  {v.storage} — {v.color}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <aside className="product-right">
        <h1 className="product-name">{product.name}</h1>
        <p className="variant-meta">{variant.storage}, {variant.color}</p>

        <div className="price-block">
          <div className="price-rupee">₹{variant.price.toLocaleString()}</div>
          <div className="mrp-rupee">₹{variant.mrp.toLocaleString()}</div>
          <div className="save-percent">
            {Math.round(((variant.mrp - variant.price) / variant.mrp) * 100)}% off
          </div>
        </div>

        <div className="emi-panel">
          <div className="emi-panel-title">EMI plans backed by mutual funds</div>

          <div className="emi-list">
            {variant.emiPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`emi-item ${selectedPlanIndex === idx ? "selected" : ""}`}
                onClick={() => setSelectedPlanIndex(idx)}
              >
                <div className="emi-left">
                  <div className="emi-amount">₹{plan.monthlyAmount.toLocaleString()} <span className="emi-tenure">x {plan.tenure} months</span></div>
                </div>

                <div className="emi-right">
                  <div className="emi-interest">
                    {plan.interestRate === 0 ? "0% interest" : `${plan.interestRate}% interest`}
                  </div>
                  {plan.cashback && <div className="emi-cashback">Additional cashback of <strong>{plan.cashback}</strong></div>}
                </div>
              </div>
            ))}
          </div>

          <button
            className="proceed-btn"
            disabled={selectedPlanIndex === null}
            onClick={() => {
              if (selectedPlanIndex === null) return;
              const chosen = variant.emiPlans[selectedPlanIndex];
              alert(`Proceeding: ${product.name} — ${variant.storage} — ${chosen.tenure} months EMI @ ₹${chosen.monthlyAmount}`);
            }}
          >
            {selectedPlanIndex === null ? "Select EMI plan" : `Buy on ${variant.emiPlans[selectedPlanIndex].tenure} months EMI`}
          </button>
        </div>
      </aside>
    </div>
  );
}
