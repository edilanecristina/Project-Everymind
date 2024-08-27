import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logoImage from "@/img/logo/logo-nunes-sport.png";

export const Header: FC = () => {
  return (
    <header className="bg-gray-200">
      <div className="container flex text-sm md:text-xl font-semibold items-center justify-between h-[96px] px-5 md:px-6 2lg:px-0">
        <div className="relative size-[80px]">
          <Link href="/">
            <Image
              sizes="(100vw - 100%)"
              alt="logo nunes sport"
              fill
              src={logoImage}
              className="object-cover rounded-3xl"
            />
          </Link>
        </div>
        <div className="flex gap-4 md:gap-8">
          <Link
            href="/"
            className="hover:text-red-600 transition-all duration-500"
          >
            Produtos
          </Link>
          <Link
            href="/management"
            className="hover:text-red-600 transition-all duration-500"
          >
            Gerenciamento
          </Link>
          <Link
            href="/about"
            className="hover:text-red-600 transition-all duration-500"
          >
            Sobre
          </Link>
        </div>
      </div>
    </header>
  );
};
