"use client";

import React, { useEffect, useState } from "react";
import { useUserContext } from "@/components/contexts/userContext";
import { onAuthStateChanged } from "firebase/auth";
import { useDateContext } from "../contexts/dateContext";
import { getAllTurns } from "@/app/controllers/getAndSetTurn";
import { deleteFixedDay, getFixedDays, setFixedDay } from "@/app/controllers/fixedDaysMethods";
import dayjs from "dayjs";
import { auth } from "@/app/firebase";

function InitializeContexts() {
  const { user, setUser } = useUserContext();
  const { setDate } = useDateContext();
  const [usersTurn, setUsersTurns] = useState(null);
  const [weeklyDisabledDays, setWeeklyDisabledDays] = useState(null);
  const [biweeklyDisabledDays, setBiweeklyDisabledDays] = useState(null);

  useEffect(() => {
    getFixedDays("weekly").then((r) => {
      setWeeklyDisabledDays(r);
    });
    getFixedDays("biweekly").then((r) => {
      setBiweeklyDisabledDays(r);
    });
  }, []);
  
  useEffect(() => {
    getAllTurns().then((r) => {
      setUsersTurns(r);
    });
  }, []);

  weeklyDisabledDays?.map((day) => {
    const dayPlusOneMonth = dayjs(day).add(1, "month").format("YYYY-MM-DD HH:mm")
    
    if (dayPlusOneMonth < dayjs().format("YYYY-MM-DD HH:mm")) {
      deleteFixedDay("weekly", day)
      setFixedDay("weekly", dayPlusOneMonth)
      console.log("DIA FIJO SEMANAL ACTUALIZADO")
    }
  });

  biweeklyDisabledDays?.map((day) => {
    const dayPlusOneMonth = dayjs(day).add(1, "month").format("YYYY-MM-DD HH:mm")

    if (dayPlusOneMonth < dayjs().format("YYYY-MM-DD HH:mm")) {
      deleteFixedDay("biweekly", day)
      setFixedDay("biweekly", dayPlusOneMonth)
      console.log("DIA FIJO QUINCENAL ACTUALIZADO")
    }
  });

  useEffect(() => {
    usersTurn?.map((dbUser) => {
      if (user?.uid === dbUser.id && dbUser.year ) {
        setDate((prevState) => ({
          ...prevState,
          year: dbUser.year,
          month: dbUser.month,
          day: dbUser.day,
          hour: dbUser.hour,
          minute: dbUser.minute,
        }));
      }
    });
  }, [usersTurn, user, setDate]);

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      // Set user to Firebase auth
      if (firebaseUser) setUser(firebaseUser);
      if (!firebaseUser) setUser(null);
    });
  });
}

export default InitializeContexts;
