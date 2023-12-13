"use client";

import React, { useEffect, useState } from "react";
import { useUserContext } from "../contexts/userContext";
import AdminUsersMenu from "../Header/AdminUsersMenu";
import getAdmin from "../../app/controllers/getAdminId";
import AdminTurnsMenu from "../Header/AdminTurnsMenu";
import AdminDisabledFixedDays from "../Header/AdminDisabledFixedDays";
import AdminHomeSection from "@/app/inicio/AdminHomeSection";

function AdminButton({ menuType }) {
  const [adminId, setAdminId] = useState(null);
  const { user } = useUserContext();

  useEffect(() => {
    getAdmin().then((r) => {
      setAdminId(r);
    });
  }, []);

  const isAdmin = () => {
    if (adminId === user?.uid && menuType === "usersMenu") {
      return <AdminUsersMenu />;
    } else if (adminId === user?.uid && menuType === "turnsMenu") {
      return <AdminTurnsMenu />;
    } else if (adminId === user?.uid && (menuType === "weekly" || menuType === "biweekly")) {
      return <AdminDisabledFixedDays howOften={menuType} />; 
    } else if (adminId === user?.uid && menuType === "adminHomeSection") {
      return <AdminHomeSection />; 
    }
  };
  return <>{isAdmin()}</>;
}

export default AdminButton;
