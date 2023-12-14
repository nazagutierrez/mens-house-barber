"use client";

import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { deleteFixedDay, getFixedDays } from "../../app/controllers/fixedDaysMethods";

export default function AdminDisabledFixedDays({ howOften }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [weeklyDisabledDays, setWeeklyDisabledDays] = useState(null);
  const [biweeklyDisabledDays, setBiweeklyDisabledDays] = useState(null);
  const [disabledDays, setDisabledDays] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    getFixedDays("weekly").then((r) => {
      setWeeklyDisabledDays(r);
    });
    getFixedDays("biweekly").then((r) => {
      setBiweeklyDisabledDays(r);
    });
  }, []);

  useEffect(() => {
    if (howOften === "weekly") {
      setDisabledDays(weeklyDisabledDays);
    } else if (howOften === "biweekly") {
      setDisabledDays(biweeklyDisabledDays);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weeklyDisabledDays, biweeklyDisabledDays]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleDelete = (howOften, day) => {
    deleteFixedDay(howOften, day)
    if (howOften === "weekly") {
      getFixedDays("weekly").then((r) => {
        setWeeklyDisabledDays(r);
      });
    } else if (howOften === "biweekly") {
      getFixedDays("biweekly").then((r) => {
        setBiweeklyDisabledDays(r);
      });
    }
  };

  return (
    <>
      <button onClick={handleClick}>
        {howOften === "weekly" && "VER TURNOS SEMANALES"}
        {howOften === "biweekly" && "VER TURNOS QUINCENALES"}
      </button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: "100vh",
            width: "20rem",
          },
        }}
      >
        {disabledDays?.map((day) => (
          <MenuItem key={day} className="justify-between hover:bg-inherit cursor-default" >
          {day}
          <button onClick={() => handleDelete(howOften, day)} className="border border-red-500 bg-red-400 font-bold text-black hover:opacity-70 text-xs ml-2 ronded-sm py-1 px-2">BORRAR</button>

          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
