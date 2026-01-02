import React, { useEffect, useState } from "react";
import type { Product } from "./interface/Product";
import { Button, Link } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState<Product[]>(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  const deleteProduct = (id: number) => {
    const updatedProducts = products.filter((p) => p.id != id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.image} alt={product.name} />
            {product.name}
            {product.price}
            {product.category}
            <Link to={`/edit-product/${product.id}`}>Edit</Link>
            <Button
              onClick={() => deleteProduct(product.id)}
              variant="contained"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
