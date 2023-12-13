import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider, MobileTimePicker, StaticTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { esES } from "@mui/x-date-pickers/locales";
import "dayjs/locale/es";
import { useDateContext } from "../../components/contexts/dateContext";
import { getFixedDays } from "../controllers/fixedDaysMethods";

export function Clock({usersTurns}) {
  const [weeklyDisabledDays, setWeeklyDisabledDays] = useState(null);
  const [biweeklyDisabledDays, setBiweeklyDisabledDays] = useState(null);

  const { date, setDate } = useDateContext();
    
  useEffect(() => {
    getFixedDays("weekly").then((r) => {
      setWeeklyDisabledDays(r);
    });
    getFixedDays("biweekly").then((r) => {
      setBiweeklyDisabledDays(r);
    });
  }, []);


  function handleTime(e) {
      setDate((prevState) => ({
        ...prevState,
        hour: selectedHour,
      }));
    const selectedHour = e.hour();
  }

function calcularFechasPosteriores(howOften ,fechaInicial, cantidad) {
  const typeOfAdd = howOften === "weekly" && 7 || howOften === "biweekly" && 14
  const fechasPosteriores = [];
  let fechaActual = dayjs(fechaInicial);

  for (let i = 0; i < cantidad; i++) {
    fechaActual = fechaActual.add(typeOfAdd, 'day');
    fechasPosteriores.push(fechaActual);
  }

  return fechasPosteriores;
}

  const disabledTime = (time, view) => {
    const disabledHours = [];
    const disabledFixedHours = [];
    const hour = time.hour();
    const month = time.month() + 1;
    const selectedDay = time.date();

    // Disable users turn hour
    usersTurns?.map((dbUser) => {
      let isRightHour = dbUser.year && dbUser.day === date.day && dbUser.month === date.month     
      if (isRightHour) {
        disabledHours.push(dbUser.hour)
      }
    })
    
    // Weekly disabled fixed admin hours 
    weeklyDisabledDays?.map((day) => {
      const fechasPosteriores = calcularFechasPosteriores("weekly" ,day, 20);

      {fechasPosteriores.map((fecha) => {
        if (fecha.month() + 1 === month && fecha.date() === selectedDay) {
          disabledFixedHours.push(fecha.hour())
        }
      })}
    })

    // Biweekly disabled fixed admin hours 
    biweeklyDisabledDays?.map((day) => {
      const fechasPosteriores = calcularFechasPosteriores("biweekly" ,day, 12);

      {fechasPosteriores.map((fecha) => {
        if (fecha.month() + 1 === month && fecha.date() === selectedDay) {
          disabledFixedHours.push(fecha.hour())
        }
      })}
    })

      return hour < 9 || hour > 19 || view === "hours" && disabledHours.some(date => date === hour) || disabledFixedHours.some(selectedHour => selectedHour === hour)
    };
    
    const defaultTime = `${date.year}-${date.month}-${date.day} ${date.hour}`;
    
  return (
    <LocalizationProvider
      localeText={
        esES.components.MuiLocalizationProvider.defaultProps.localeText
      }
      adapterLocale="es"
      dateAdapter={AdapterDayjs}
    >
      <StaticTimePicker
        defaultValue={dayjs(defaultTime)}
        className="bg-turnos text-white min-h-[440px] capitalize !hidden text-xl md:!block"
        shouldDisableTime={disabledTime}
        onChange={(e) => handleTime(e)}
        ampm
        views={['hours']}
        slotProps={{
          actionBar: { actions: [] },
        }}
      />
       <MobileTimePicker
        defaultValue={dayjs(defaultTime)}
        className="bg-turnos text-white w-[303px] !py-10 text-align-last capitalize !block md:!hidden"
        shouldDisableTime={disabledTime}
        onChange={(e) => handleTime(e)}
        ampm
        views={['hours']}
        slotProps={{
          actionBar: { actions: ["accept"] },
        }}
       />
    </LocalizationProvider>
  );
}
