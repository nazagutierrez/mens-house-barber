import React from 'react';
import Link from "next/link";
import { BsWhatsapp, BsInstagram, BsTelephone } from "react-icons/bs";

export default function FixedSocial() {
  return (
    <>
    <div className="fixed hidden md:flex h-[138px] mt-[-69px] flex-col gap-8 px-5 text-darkerWhite text-2xl right-0 top-1/2 z-10">
      <Link href="https://www.instagram.com/menshousebarber/" target="_blank" className="text-hover-effect transition-all"><BsInstagram/></Link>
      <Link href="https://wa.me/2364300357/" target="_blank" className="text-hover-effect transition-all"><BsWhatsapp /></Link>
      <Link href="tel:+54 2364300357" className="text-hover-effect transition-all"><BsTelephone/></Link>
    </div>
    <div className="fixed flex flex-col text-darkerWhite/60 sm:text-xl left-0 bottom-0 z-10 p-5">
      <p>Hecho por:</p>
      <a href="https://www.linkedin.com/in/nazarenogutierrez1/" target="_blank" className="italic underline decoration-1 decoration-yellow-500/50 underline-offset-4">Nazareno Gutierrez</a>
    </div>
    </>
  );
}
