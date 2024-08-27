"use client";
import { FC, useEffect, useState } from "react";
import { ProductForm, ProductFormProps } from "./formCard";

export const RootManagementPage: FC = () => {
  const [products, setProducts] = useState<ProductFormProps[]>([]);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductFormProps | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data: ProductFormProps[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section id="content">
      <ProductForm
        product={selectedProduct ?? undefined}
        onSubmitSuccess={() => {
          fetchProducts();
          setSelectedProduct(null);
        }}
      />
    </section>
  );
};
