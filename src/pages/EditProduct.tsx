import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Product } from "./interface/Product";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    category: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const existingProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const productId = Number(id);
    if (!id || Number.isNaN(productId)) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    const found = existingProducts.find((p) => p.id === productId);

    if (!found) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    setProduct({
      name: found.name,
      price: found.price,
      category: found.category,
      image: found.image,
    });

    setLoading(false);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const productId = Number(id);
    if (!id || Number.isNaN(productId)) return;

    const updatedProducts = existingProducts.map((p) =>
      p.id === productId ? { id: productId, ...product } : p
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));

    navigate("/products");
  };

  if (loading) return <div style={{ padding: 16 }}>Loading...</div>;
  if (notFound) return <div style={{ padding: 16 }}>Product not found.</div>;

  return (
    <div>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Product Name"
            name="name"
            value={product.name}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <TextField
            label="Price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <TextField
            label="Category"
            name="category"
            value={product.category}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <TextField
            label="Image URL"
            name="image"
            value={product.image}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          <Button type="submit" variant="contained">
            Update
          </Button>
          <Button
            type="button"
            variant="outlined"
            onClick={() => navigate("/products")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
