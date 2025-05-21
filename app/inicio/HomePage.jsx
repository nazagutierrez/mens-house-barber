import React from "react";
import AdminButton from "@/components/common/AdminButton";
import FirstHomeSection from "./FirstHomeSection";
import SecondHomeSection from "./SecondHomeSection";

export default function HomePage() {
  return (
    <div className="min-h-full relative overflow-hidden">
      <FirstHomeSection />
      <AdminButton menuType="adminHomeSection" />
      <SecondHomeSection />
    </div>
  );
}
