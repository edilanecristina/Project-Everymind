import Image from "next/image";
import { FC } from "react";
import imageSports from "@/img/about/illustration-sports-nunes-spots.jpg";

export const AboutNunesSports: FC = () => {
  return (
    <section
      id="about-nunes-sports"
      className="py-24 px-5 md:px-6 2lg:px-0 bg-white"
    >
      <div className="container flex flex-col gap-8 justify-center items-center lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-8 md:gap-12 lg:w-[500px]">
          <h1 className="text-4xl font-bold text-blue-950 text-center lg:text-left">
            Sobre a Nunes Sports
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl text-center lg:text-left">
            A Nunes Sports é uma empresa dedicada a oferecer os melhores
            produtos e equipamentos para atletas e entusiastas do esporte. Com
            anos de experiência no mercado, nossa missão é fornecer qualidade e
            inovação para atender às suas necessidades esportivas. Estamos
            comprometidos em oferecer um excelente atendimento ao cliente e
            garantir que você tenha a melhor experiência possível com nossos
            produtos. Se você está procurando por artigos esportivos confiáveis
            e de alta qualidade, a Nunes Sports é a sua escolha ideal.
          </p>
        </div>
        <div className="relative w-[335px] md:w-[550px] h-[200px] md:h-[340px] lg:h-[300px] lg:w-[600px]">
          <Image
            sizes="(100vw - 100%)"
            alt="nunes sport"
            fill
            src={imageSports}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
