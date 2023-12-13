import React, { useEffect, useState } from "react";
import Logo from "../../components/assets/logo-peluqueria-no-bg.webp";
import Image from "next/image";
import { BsScissors } from "react-icons/bs";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { useDateContext } from "@/components/contexts/dateContext";
import { CircularProgress } from "@mui/material";

function FinalStep() {
  const { date } = useDateContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, []);

  return isLoading ? (
    <div className="min-h-[300px] md:min-h-[440px] text-center w-[280px] sm:w-full flex flex-col justify-around items-center py-5 bg-neutral-950/90 text-darkerWhite md:text-xl">
      <CircularProgress />
    </div>
  ) : (
    <div className="md:min-h-[440px] text-center w-full flex flex-col justify-around items-center py-5 bg-neutral-950/90 text-darkerWhite md:text-xl">
    <h1 className="text-effect text-xl md:text-2xl">GRACIAS POR SACAR TURNO</h1>
      <p>
        Te esperamos el dia {date.day}/{date.month} a las {date.hour}:00
      </p>
      <div className="italic flex-container text-base">
        <MdLocationOn /> Lebensohn 418 - Junin, Buenos Aires
      </div>
      <Image unoptimized priority src={Logo} alt="BarberLogo" className="py-4 h-40 md:h-[250px] object-contain" />
      <h2>Para cancelar el turno comunicate con el peluquero.</h2>
      <div className="mt-5 flex items-center gap-2 text-effect">
        <i> <BsScissors /> </i>
        <h3 className="underline underline-offset-4">
            MEN{"'"}S HOUSE BARBER
        </h3>
        <i> <BsScissors /> </i>
      </div>
      <div className="flex-container gap-5">
        <Link className="border border-gray-400 bg-grayCustom font-bold text-black text-hover-effect ronded-sm py-1 px-5 mt-4" href="/">INICIO</Link>
        <Link className="border border-gray-400 bg-grayCustom font-bold text-black text-hover-effect ronded-sm py-1 px-5 mt-4" href="/nosotros">NOSOTROS</Link>
      </div>
    </div>
  );
}

export default FinalStep;
