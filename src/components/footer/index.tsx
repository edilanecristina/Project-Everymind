import { FC } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export const Footer: FC = () => {
  return (
    <footer className="bg-red-600">
      <div className="container px-5 md:px-6 2lg:px-0 items-center flex flex-col justify-center gap-4 text-center py-6">
        <h2 className="text-white text-2xl font-bold">Nunes Sports</h2>
        <p className="text-white font-medium">Conheça nossas redes sociais</p>
        <div className="flex gap-2 text-white text-3xl cursor-pointer">
          <FaInstagram className="hover:text-blue-950 transition-all duration-300" />
          <AiOutlineFacebook className="hover:text-blue-950 transition-all duration-300" />
          <FaWhatsapp className="hover:text-blue-950 transition-all duration-300" />
        </div>
      </div>
    </footer>
  );
};
