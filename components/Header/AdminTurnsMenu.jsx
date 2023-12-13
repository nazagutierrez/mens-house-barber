"use client";

import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import getUsers from "../../app/controllers/getAllUsers";
import deleteUserTurn from "@/app/controllers/deleteUserTurn";
import setTurn from "@/app/controllers/getAndSetTurn";
import { useStepContext } from "../contexts/stepContext";

export default function AdminTurnsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [listedUsers, setListedUsers] = useState(null);
  const { setActiveStep } = useStepContext();
  const open = Boolean(anchorEl);

  useEffect(() => {
    getUsers().then((r) => {
      setListedUsers(r);
    });
  }, []);

  const sortUsersTurns = () => {
    let usersToSort = [];
    listedUsers?.map((user) => {
      const { year, month, day, hour } = user.turno;
      const minute = 0o0
      const convertedDate = new Date(year, month - 1, day, hour, minute);
      year &&
        usersToSort.push({
          nombre: user.nombre,
          apellido: user.apellido,
          turno: convertedDate,
          id: user.id
        });
    });
    const sortedUsersTurns = usersToSort.sort(
      (a, b) => a.turno.getTime() - b.turno.getTime()
    );
    return sortedUsersTurns;
  };

  const deleteTurn = (userUid) => {
    setTurn(userUid, []);
    setActiveStep(0)
    getUsers().then((r) => {
      setListedUsers(r);
    });
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checkExpiredTurn = (user) => {
    const userTurnDate = user.turno?.getDate()
    const userUid = user.id
    const today = new Date().getDate();
    if (userTurnDate < today) {
      deleteUserTurn(userUid)
    }
  };

  return (
    <>
      <button onClick={handleClick} className="text-xl">TURNOS ACTIVOS</button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { maxHeight: "100%", width: "26rem" } }}
      >
        <div className="text-center">¡Se eliminan haciendo click!</div>
        {sortUsersTurns()?.map((user) => {
          let options = { weekday: "long",  year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: true }
          return (              
            <div key={user.id} onClick={() => deleteTurn(user.id)}>
                {!checkExpiredTurn(user) && (
                  <MenuItem>
                    <div className="flex flex-col py-1">
                      <p>
                        {user.nombre} {user.apellido}
                      </p>
                      <div className="flex gap-0.5">
                          <span className="underline underline-offset-2">
                            Fecha:
                          </span>{" "}
                          <p className="whitespace-break-spaces md:whitespace-normal" >{user.turno.toLocaleString("es-ES", options)}</p>
                      </div>
                    </div>
                  </MenuItem>
                )}
              </div>
          );
        })}
      </Menu>
    </>
  );
}
