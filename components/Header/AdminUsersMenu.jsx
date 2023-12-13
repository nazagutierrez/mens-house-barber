"use client";

import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckLg } from "react-icons/bs";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { useEffect, useState } from "react";
import getUsers from "../../app/controllers/getAllUsers";
import toggleAuthorization from "../../app/controllers/toggleAuthorization";

export default function AdminUsersMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [listedUsers, setListedUsers] = useState(null);

  useEffect(() => {
    getUsers().then((r) => {
      setListedUsers(r);
    });
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changePermission = (user) => {
    toggleAuthorization(user);
    getUsers().then((r) => {
      setListedUsers(r);
    });
  };

  return (
    <>
      <button onClick={handleClick} className="text-xl">USUARIOS</button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: '100vh',
            width: "20rem",
          },
        }}
      >
        <div className="text-center">¡Autorizar/desautorizar haciendo click!</div>
        {listedUsers?.map((user) => (
          <MenuItem key={user.correo} onClick={() => changePermission(user)}>
            <div className="flex flex-col">
              <p>
                {user?.nombre} {user?.apellido}
              </p>
              <p>{user.correo}</p>
            </div>
            <div
              className={`${
                user.esAutorizado ? "text-green-400" : "text-red-400"
              } pl-2`}
            >
              {user.esAutorizado ? <BsCheckLg /> : <MdOutlineDoNotDisturb />}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
