import React from "react";
import FixedDayForm from "./FixedDayForm";
import AdminButton from "@/components/common/AdminButton";

export default function AdminHomeSection() {
  return (
    <section className="bg-first-section sm:text-xl h-screen flex-container flex-wrap gap-5 flex-col sm:flex-row text-darkerWhite children-scroll py-10 md:pb-0">
      <div className="flex-container flex-col gap-4 bg-turnos px-4 sm:mr-5 h-1/3">
        <div className="w-fit bg-neutral-800 hover:opacity-70 rounded-md py-1">
          <AdminButton menuType="usersMenu" />
        </div>
        <div className="w-fit bg-neutral-800 hover:opacity-70 rounded-md py-1">
          <AdminButton menuType="turnsMenu" />
        </div>
        <div className="w-fit bg-neutral-800 hover:opacity-70 rounded-md py-1">
          <AdminButton menuType="weekly" />
        </div>
        <div className="w-fit bg-neutral-800 hover:opacity-70 rounded-md py-1">
          <AdminButton menuType="biweekly" />
        </div>
      </div>
      <FixedDayForm />
    </section>
  );
}
