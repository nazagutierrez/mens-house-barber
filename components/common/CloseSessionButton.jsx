"use client";

import React from 'react';
import { useUserContext } from "@/components/contexts/userContext";
import { useDateContext } from "../contexts/dateContext";
import { useStepContext } from "../contexts/stepContext";
import { auth } from "@/app/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { MdAccountCircle, MdOutlineNoAccounts } from "react-icons/md";
import Link from "next/link";

export default function CloseSessionButton({renderChild = false, children}) {
  const router = useRouter();
  const { user } = useUserContext();
  const { setDate } = useDateContext();
  const { setActiveStep } = useStepContext();

  function closeSession() {
    setDate({ year: 0, month: 0, day: 0, hour: 0, minute: 0 });
    setActiveStep(0);
    signOut(auth);
    router.push("/");
  }

  return (
    <>
      {renderChild ? (
        <button onClick={closeSession} className="underline decoration-2 underline-offset-4 decoration-red-400">{children}</button>
      ) : (
        <div>
          {user ? (
            <button className="text-red-400" onClick={closeSession}>
              <MdOutlineNoAccounts />
            </button>
          ) : (
            <Link href="/iniciar-sesion">
              <MdAccountCircle />
            </Link>
          )}
        </div>
      )}
    </>
  );
}
