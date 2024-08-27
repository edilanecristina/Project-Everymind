import { FC } from "react";
import imageBanner from "@/img/banner/illustration-banner.png";
import Image from "next/image";
export const BannerHomePage: FC = () => {
  return (
    <section
      id="banner"
      className="bg-gradient-to-r from-blue-950 to-blue-500 flex items-center"
    >
      <div className="container px-5 md:px-6 2lg:px-0 items-center flex flex-col gap-8 py-10 md:flex-row md:justify-center md:gap-32">
        <div className="flex flex-col gap-4 items-center md:gap-8">
          <h1 className="text-white font-bold text-5xl md:w-80">
            Nunes Sports
          </h1>
          <p className="text-white font-bold text-lg">
            A maior loja de esportes do Brasil
          </p>
        </div>
        <div className="relative size-[320px] md:size-[350px]">
          <Image
            alt="imagem esportes banner"
            src={imageBanner}
            sizes="(100vw - 100%)"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
