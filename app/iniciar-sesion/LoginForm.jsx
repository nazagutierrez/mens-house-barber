"use client";

import React, { useEffect, useState } from "react";
import { useUserContext } from "@/components/contexts/userContext";
import { AiOutlineCheck } from "react-icons/ai";
import { useRouter } from "next/navigation";
import loginEmail from "../controllers/loginEmail";
import getUsers from "../controllers/getAllUsers";

export default function LoginForm() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [dbUsers, setDbUsers] = useState(null);
  const { user } = useUserContext();

useEffect(() => {
  getUsers().then((r) => {
    setDbUsers(r);
  });
}, [user]);

  useEffect(() => {
    dbUsers?.map((dbUser) => {
      if (user?.uid === dbUser.id) {
        router.push("/");
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbUsers]);

  function login(e) {
    // Log in or register user in Firebase
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const surName = e.target.surName.value;
    const isAuthorized = false;
    const isAdmin = false;
    loginEmail(email, password, name, surName, isAuthorized, isRegistering, isAdmin);
  }

  return (
    <>
      <h3 className="text-center text-2xl mb-5 md:mb-0 md:text-3xl text-darkerWhite text-effect z-10 pt-5 md:pt-16 underline underline-offset-4">
        {isRegistering ? "REGISTRARSE" : "INICIAR SESIÓN"}
      </h3>
      <form
        className="flex-container flex-col text-base md:text-lg gap-1 w-full"
        onSubmit={(e) => login(e)}
      >
        <div
          className={`${!isRegistering && "hidden"} w-full flex-container flex-col`}
        >
          <label className="text-darkerWhite self-start pl-24 italic mt-8">
            Nombre
          </label>
          <input
            name="name"
            placeholder="Nombre"
            required={isRegistering}
            className="border placeholder-black/50 border-gray-400 bg-grayCustom text-black px-3 w-3/4 py-1 rounded-sm shadow-md hover:border-gray-200"
          />
        </div>
        <div
          className={`${!isRegistering && "hidden"} w-full flex-container flex-col`}
        >
          <label className="text-darkerWhite self-start pl-24 italic mt-5">
            Apellido
          </label>
          <input
            name="surName"
            placeholder="Apellido"
            required={isRegistering}
            className="border placeholder-black/50 border-gray-400 bg-grayCustom text-black px-3 w-3/4 py-1 rounded-sm shadow-md hover:border-gray-200"
          />
        </div>
        <label className="text-darkerWhite self-start pl-24 italic mt-5">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          className="border placeholder-black/50 border-gray-400 bg-grayCustom text-black px-3 w-3/4 py-1 rounded-sm shadow-md hover:border-gray-200"
        />
        <p className="text-red-500 text-xs italic" id="error-email"></p>
        <label className="text-darkerWhite self-start pl-24 italic mt-5">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          required
          placeholder="•••••••• (6 mínimo)"
          className="border placeholder-black/50 border-gray-400 bg-grayCustom text-black px-3 w-3/4 py-1 rounded-sm shadow-md hover:border-gray-200"
        />
        <p className="text-red-500 text-xs italic" id="error-password"></p>
        <button type="submit" className="bg-grayCustom px-2 py-1 rounded-md w-1/3 text-xl my-6 shadow-md transition-all text-hover-effect">
          {isRegistering ? "Registrarse" : "Iniciar sesión"}
        </button>
      </form>

      <div className="flex items-center w-full text-xl pl-5 pb-3 text-darkerWhite">
        <div className={`${isRegistering && "my-7"} flex gap-1 `}>
          <p>
            {isRegistering ? "Tienes una cuenta?" : "No tienes una cuenta?"}
          </p>
          <button
            className="text-darkerWhite text-effect italic underline underline-offset-2 pr-1"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Inicia sesión!" : "Registrate!"}
          </button>
        </div>
        <div className={`${!isRegistering && "h-14 mb-5"} flex-container ml-10 mb-3`}>
          {user && (
            <i className="text-green-300 text-5xl">
              <AiOutlineCheck />
            </i>
          )}
        </div>
      </div>
    </>
  );
}
