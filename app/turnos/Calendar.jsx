import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider, MobileDatePicker, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useStepContext } from "../../components/contexts/stepContext";
import { esES } from "@mui/x-date-pickers/locales";
import "dayjs/locale/es";
import { useDateContext } from "../../components/contexts/dateContext";
import { getAllTurns } from "../controllers/getAndSetTurn";
import { useUserContext } from "@/components/contexts/userContext";

export function Calendar() {
  const { setActiveStep } = useStepContext();
  const { date, setDate } = useDateContext();
  const { user } = useUserContext();
  const [userTurn, setUserTurns] = useState(null);

  useEffect(() => {
    getAllTurns().then((r) => {
      setUserTurns(r);
    });
  }, []);

  useEffect(() => {
    userTurn?.map((dbUser) => {
      if (dbUser.id === user.uid && dbUser.year ) {
        setActiveStep(3)
      }
    });
  }, [userTurn, setActiveStep, user]);

  function handleDate(e) {
    const selectedDay = e.date();
    const selectedMonth = e.month() + 1;
    const selectedYear = e.year();
    setDate((prevState) => ({
      ...prevState,
      year: selectedYear,
      month: selectedMonth,
      day: selectedDay,
    }));
  }

  function maxMonth() {
    let month = dayjs().month() + 4;
    let day = dayjs().date();
    let year = dayjs().year();
    return `${year}-${month}-${day}`;
  }

  const disabledDays = (allDates) => {
    const propDay = allDates.day();
    const propDate = allDates.date();
    const propMonth = allDates.month();

    const today = dayjs().date()
    const todayMonth = dayjs().month()
    return propDay === 0 || propDay === 6 || propDate === today && propMonth === todayMonth
  };
  
  return (
    <LocalizationProvider
      localeText={
        esES.components.MuiLocalizationProvider.defaultProps.localeText
      }
      adapterLocale="es"
      dateAdapter={AdapterDayjs}
    >
      <StaticDatePicker
        onChange={(e) => handleDate(e)}
        minDate={dayjs()}
        views={["day"]}
        shouldDisableDate={disabledDays}
        maxDate={dayjs(maxMonth())}
        orientation="portrait"
        className="bg-turnos text-white !hidden md:!block min-h-[440px] capitalize"
        slotProps={{
          actionBar: { actions: [] },
        }}
      />
      <MobileDatePicker
        className="md:!hidden !block bg-turnos w-[303px] !p-10 text-align-last" 
        onChange={(e) => handleDate(e)}
        minDate={dayjs()}
        views={["day"]}
        shouldDisableDate={disabledDays}
        maxDate={dayjs(maxMonth())}
        slotProps={{
          actionBar: { actions: (date.day != 0 && ["accept"]) || [] },
        }}
       />
    </LocalizationProvider>
  );
}
