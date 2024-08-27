"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import imageCard from "@/img/cardproduct/illustration-card.png";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { ProductForm, ProductFormProps } from "@/templates/Management/formCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const CardProductHomePage: FC = () => {
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

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (productId: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      } else {
        console.error("Erro ao deletar o produto:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao deletar o produto:", error);
    }
  };

  const handleSelectProduct = (product: ProductFormProps) => {
    setSelectedProduct(product);
  };

  return (
    <section id="card-home" className="py-24 px-5 md:px-6 2lg:px-0">
      <div className="container flex flex-col gap-12 justify-center items-center">
        <h2 className="text-5xl font-semibold">Conheça nossos produtos</h2>
        <div className="overflow-hidden w-full">
          <Swiper slidesPerView="auto" spaceBetween={32} className="h-[500px]">
            {products.map((product) => (
              <SwiperSlide key={product.id} className="max-w-[335px] shrink-0">
                <div className="flex flex-col gap-1 bg-gray-200 shadow-blue-950 shadow-xl rounded-2xl py-4 px-3 transition-all duration-500 ease-out hover:shadow-red-600">
                  <div className="relative h-[260px]">
                    <Image
                      alt={`Imagem de ${product.title}`}
                      src={imageCard}
                      sizes="(100vw - 100%)"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <h2 className="text-blue-950 font-bold text-lg pt-2">
                    {product.title}
                  </h2>
                  <p className="text-blue-950 font-medium">
                    {product.description}
                  </p>
                  <p className="text-blue-950 font-medium">
                    R$: {product.price}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => handleDelete(product.id ?? "")}
                      className="bg-blue-950 text-white font-medium rounded-2xl text-lg w-[40%] flex items-center justify-center mt-3 cursor-pointer hover:bg-red-600 transition-all duration-500 gap-2 h-10"
                    >
                      Deletar
                      <MdDeleteOutline className="text-white font-medium text-xl" />
                    </button>
                    <button
                      onClick={() => handleSelectProduct(product)}
                      className="bg-blue-950 text-white font-medium rounded-2xl text-lg w-[40%] flex items-center justify-center mt-3 cursor-pointer hover:bg-red-600 transition-all duration-500 gap-2 h-10"
                    >
                      Editar
                      <CiEdit className="text-white font-medium text-xl" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {selectedProduct && (
          <ProductForm
            product={selectedProduct}
            onSubmitSuccess={() => {
              fetchProducts();
              setSelectedProduct(null);
            }}
          />
        )}
      </div>
    </section>
  );
};
