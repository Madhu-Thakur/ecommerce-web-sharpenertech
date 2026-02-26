import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "p1",
    title: "Colors",
    images: [
      "image1-url",
      "image2-url",
      "image3-url"
    ],
    reviews: ["Nice product", "Very good quality"]
  },
  {
    id: "p2",
    title: "Black and White",
    images: [
      "image1-url",
      "image2-url"
    ],
    reviews: ["Loved it"]
  }
];

function Products() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;