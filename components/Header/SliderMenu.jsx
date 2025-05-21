"use client"

import React, { useState } from "react";
import Link from "next/link";
import logo from "../../components/assets/logo-peluqueria-no-bg.webp";
import { Drawer, Box } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiInstagram } from "react-icons/si";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import { useUserContext } from "../contexts/userContext";
import CloseSessionButton from "../common/CloseSessionButton";

const SliderMenu = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const { user } = useUserContext();

  return (
    <>
      <div
        className="text-5xl hover:opacity-40 p-2 transition-all cursor-pointer"
        onClick={() => setIsSliderOpen(true)}
      >
        <RxHamburgerMenu />
      </div>
      <Drawer
        anchor="right"
        open={isSliderOpen}
        onClose={() => setIsSliderOpen(false)}
      >
        <Box
          p={2}
          width="210px"
          textAlign={"center"}
          className="flex flex-col justify-between h-full bg-brown"
        >
          <div className="flex flex-col justify-between h-full items-center">
            <div className="pb-10 pt-3 flex w-full items-center justify-around">
              <Image
                unoptimized
                src={logo}
                alt="logo"
                className="w-32 rounded-md"
              />
            </div>
            <div className="flex flex-col h-full items-center gap-7 underline underline-offset-4 text-lg">
              <div>
                <Link href="/">Inicio</Link>
              </div>
              <div>
                <Link href="/turnos">Turnos</Link>
              </div>
              <div>
                <Link href="/nosotros">Nosotros</Link>
              </div>
              <div>
                <Link href="/galeria">Galería</Link>
              </div>
              <div className={`${user && "hidden"}`}>
                <Link href="/iniciar-sesion">Iniciar sesión</Link>
              </div>
              <div className={`${user ? "block": "hidden"}`}>
                <CloseSessionButton renderChild={true}>Cerrar sesión</CloseSessionButton>
                {/* <Link href="/iniciar-sesion">Cerrar sesión</Link> */}
              </div>
            </div>
            <div className="flex gap-6">
              <Link
                className="text-3xl cursor-pointer"
                href="https://www.instagram.com/menshousebarber/"
                target="_blank"
              >
                <SiInstagram />
              </Link>
              <Link
                className="text-3xl cursor-pointer"
                href="https://wa.me/2364300357/"
                target="_blank"
              >
                <BsWhatsapp />
              </Link>
              <Link
                className="text-3xl cursor-pointer"
                href="tel:+54 2364300357"
                target="_blank"
              >
                <BsTelephone />
              </Link>
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default SliderMenu;
