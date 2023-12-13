"use client";

import React, { useEffect, useState } from "react";
import { useUserContext } from "@/components/contexts/userContext";
import getAdmin from "../controllers/getAdminId";
import { setFixedDay } from "../controllers/fixedDaysMethods";

export default function FixedDayForm() {
  const [adminId, setAdminId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const { user } = useUserContext();

  useEffect(() => {
    getAdmin().then((r) => {
      setAdminId(r);
    });
  }, []);

  useEffect(() => {
    if (adminId === user?.uid) {
      setIsAdmin(true);
    }
    if (!user) {
      setIsAdmin(false);
    }
  }, [isAdmin, user, adminId]);

  const submitFixedDay = (e, howOften) => {
    e.preventDefault()
    if (howOften === "weekly") {
        const weeklyDay = e.target.weekly.value;
        setFixedDay(howOften, weeklyDay)
        e.target.weekly.value = ""
      } else if (howOften === "biweekly") {
        const biweeklyDay = e.target.biweekly.value;
        setFixedDay(howOften, biweeklyDay)
        e.target.biweekly.value = ""
    }
  }

  return (
    <>
      {isAdmin && (
        <div className="text-white flex-container flex-col bg-turnos gap-5 p-5 sm:p-10 text-center">
         
          <form onSubmit={(e) => submitFixedDay(e, "weekly")} className="flex-container w-full flex-col">
            <label htmlFor="weekly">Añadir turno fijo SEMANAL</label>
            <input
                name="weekly"
                placeholder="AAAA-MM-DD HH:mm"
                className="border text-lg placeholder-black/50 border-gray-400 bg-grayCustom text-black pl-3 w-4/5 py-1 rounded-sm shadow-md hover:border-gray-200"
            />
            <button type="submit" className="bg-neutral-800 hover:opacity-70 text-lg px-2 py-1 mt-1 mb-4 rounded">Añadir</button>
          </form>

          <form onSubmit={(e) => submitFixedDay(e, "biweekly")} className="flex-container w-full flex-col">
            <label htmlFor="weekly">Añadir turno fijo QUINCENAL</label>
            <input
                name="biweekly"
                placeholder="AAAA-MM-DD HH:mm"
                className="border text-lg placeholder-black/50 border-gray-400 bg-grayCustom text-black pl-3 w-4/5 py-1 rounded-sm shadow-md hover:border-gray-200"
            />
            <button type="submit" className="bg-neutral-800 hover:opacity-70 text-lg px-2 py-1 mt-1 mb-4 rounded">Añadir</button>
          </form>

        </div>
      )}
    </>
  );
}
