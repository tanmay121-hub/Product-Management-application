import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "./interface/Product";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  const fetchProduct = () => {
    const existingProducts: Product[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
  };
  useEffect(() => {
    //first
    console.log("on mounted");
    return () => {
      //second
      console.log("on unmounted");
    };
  }),
    [];
  return <div style={{ padding: 16 }}>Edit Product:</div>;
};

export default EditProduct;
