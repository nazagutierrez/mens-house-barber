import React from "react";
import Image from "next/image";
import Link from "next/link";
import barber from "../../components/assets/barber-1.webp";

export default function SecondHomeSection() {
  return (
    <section className="bg-[#141414] relative h-screen flex-container gap-5 md:gap-20 text-white text-center md:text-start flex-col md:flex-row md:text-xl">
      <Image
        unoptimized
        src={barber}
        alt="barber"
        className="h-[200px] sm:h-[300px] lg:h-[550px] w-fit object-contain rounded rounded-bl-[80px] rounded-tr-[80px] z-30"
      />
      <div className="md:w-1/3 relative w-4/5 md:h-1/2 flex-container gap-5 flex-col">
        <div className="absolute bg-white/10 blur-3xl top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" />
        <p>
          Men{"'"}s house. Te ofrece el mejor servicio de peluquería/barbería
          brindándote una atención exclusiva y personalizada.
        </p>
        <p className="underline underline-offset-4 decoration-1 decoration-yellow-500/40">
          Men{"'"}s House. {'"'}Solo Buenos Momentos{'"'}
        </p>
        <div className="self-center md:self-start">
          <div className="lg:mt-10">
            Seguinos en Instagram:{" "}
            <Link
              href="https://www.instagram.com/menshousebarber/ "
              className="italic text-effect underline decoration-1 pr-1 decoration-yellow-500/40"
              target="_blank"
            >
              Men{"'"}s House Barber
            </Link>
          </div>
          <div className="mt-4 hidden sm:block">
            Mirá los cortes que podemos hacer en la{" "}
            <Link
              href="/nosotros"
              className="italic text-effect underline decoration-1 decoration-yellow-500/40"
            >
              Galería.
            </Link>
          </div>
          <div>
            Lee una pequeña descripción nuestra en la sección{" "}
            <Link
              href="/nosotros"
              className="italic text-effect underline decoration-1 decoration-yellow-500/40"
            >
              Nosotros.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
