import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Product Detail Page</h2>

      <h3>Product ID: {params.productId}</h3>

      <img
        src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        alt="product"
        width="300"
      />

      <h4 style={{ marginTop: "20px" }}>Reviews</h4>
      <p>Nice product</p>
      <p>Very good quality</p>
    </div>
  );
}

export default ProductDetail;