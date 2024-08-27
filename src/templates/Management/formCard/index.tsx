"use client";
import { FC, useState, useEffect } from "react";

export interface ProductFormProps {
  id?: string;
  title: string;
  code: string;
  description: string;
  price: string;
  onSubmitSuccess: () => void;
}

export const ProductForm: FC<{
  product?: ProductFormProps | null;
  onSubmitSuccess: () => void;
}> = ({ product, onSubmitSuccess }) => {
  const [productName, setProductName] = useState(product?.title || "");
  const [productCode, setProductCode] = useState(product?.code || "");
  const [productDescription, setProductDescription] = useState(
    product?.description || ""
  );
  const [productPrice, setProductPrice] = useState(product?.price || "");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setProductName(product.title);
      setProductCode(product.code);
      setProductDescription(product.description);
      setProductPrice(product.price);
    }
  }, [product]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title: productName,
      code: productCode,
      description: productDescription,
      price: productPrice,
    };

    try {
      let response;
      if (product) {
        response = await fetch(`http://localhost:5000/products/${product.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } else {
        response = await fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      if (response.ok) {
        setFeedbackMessage("Produto cadastrado com sucesso!");

        if (!product) {
          setProductName("");
          setProductCode("");
          setProductDescription("");
          setProductPrice("");
        }

        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else {
        setFeedbackMessage("Erro ao salvar o produto: " + response.statusText);
      }
    } catch (error) {
      setFeedbackMessage("Erro ao salvar o produto: ");
    }
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  return (
    <section id="product-form" className="py-24 px-5 md:px-6 2lg:px-0">
      <div className="container flex flex-col gap-12 justify-center items-center">
        <h2 className="text-5xl font-semibold text-blue-950">
          {product ? "Editar Produto" : "Cadastro de Produto"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 bg-gray-200 shadow-blue-950 shadow-xl rounded-2xl py-6 px-6 w-[90%] md:w-[70%] lg:w-[50%]"
        >
          <div className="flex flex-col gap-6">
            <label className="text-blue-950 font-medium text-lg flex flex-col">
              Nome do Produto
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mt-1 p-3 border border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite o nome do produto"
                required
              />
            </label>
            <div className="flex justify-between">
              <label className="text-blue-950 font-medium text-lg flex flex-col w-[45%]">
                Código do Produto
                <input
                  type="text"
                  value={productCode}
                  onChange={(e) => setProductCode(e.target.value)}
                  className="mt-1 p-3 border border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Digite o código"
                  required
                />
              </label>
              <label className="text-blue-950 font-medium text-lg flex flex-col w-[45%]">
                Preço do Produto
                <input
                  type="text"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="mt-1 p-3 border border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Digite o preço"
                  required
                />
              </label>
            </div>
            <label className="text-blue-950 font-medium text-lg flex flex-col">
              Descrição do Produto
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="mt-1 p-3 border border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Digite uma descrição detalhada do produto"
                required
              />
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-950 text-white font-medium rounded-2xl text-lg w-[70%] flex items-center justify-center mt-4 cursor-pointer hover:bg-red-600 transition-all duration-500 h-12"
            >
              {product ? "Salvar Alterações" : "Cadastrar"}
            </button>
          </div>
          {feedbackMessage && (
            <div className="text-center mt-4 text-lg text-green-500">
              {feedbackMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
