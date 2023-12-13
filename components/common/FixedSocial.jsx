import React from 'react';
import Link from "next/link";
import { BsWhatsapp, BsInstagram, BsTelephone } from "react-icons/bs";

export default function FixedSocial() {
  return (
    <>
    <div className="fixed hidden md:flex h-[172px] mt-[-86px] flex-col gap-8 px-5 text-darkerWhite text-4xl right-0 top-1/2 z-10">
      <Link href="https://www.instagram.com/menshousebarber/" target="_blank" className="text-hover-effect"><BsInstagram/></Link>
      <Link href="https://wa.me/2364300357/" target="_blank" className="text-hover-effect"><BsWhatsapp /></Link>
      <Link href="tel:+54 2364300357" className="text-hover-effect"><BsTelephone/></Link>
    </div>
    <div className="fixed flex flex-col text-darkerWhite/60 sm:text-2xl left-0 bottom-0 z-10 p-5">
      <p>Hecho por:</p>
      <a href="https://wa.me/2364329720/" target="_blank" className="italic underline underline-offset-4">Nazareno Gutierrez</a>
    </div>
    </>
  );
}
