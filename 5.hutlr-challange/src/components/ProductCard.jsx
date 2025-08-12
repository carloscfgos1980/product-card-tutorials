import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);//initial state of the varian is small

  const handleVariantChange = (e) => {
    setSelectedVariant(e.target.value);
  };

  const isOutOfStock = !product.inStock;// true when the in stock is false, double negative so it desactivates label form

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <label className="product-variant-label">
        Variant:
        <select
          value={selectedVariant}
          onChange={handleVariantChange}
          disabled={isOutOfStock}
          className="product-variant-select"
        >
          {product.variants.map((variant) => (
            <option key={variant} value={variant}>
              {variant}
            </option>
          ))}
        </select>
      </label>
      {isOutOfStock ? (
        <button className="product-btn out-of-stock" disabled>
          Out of Stock
        </button>
      ) : (
        <button className="product-btn">Add to Cart</button>
      )}
    </div>
  );
}

export default ProductCard;