import React from "react";
import AdminButton from "@/components/common/AdminButton";
import FirstHomeSection from "./FirstHomeSection";
import SecondHomeSection from "./SecondHomeSection";

export default function HomePage() {
  return (
    <div className="min-h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-[100%] h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 rotate-45 origin-top-left" />
        <div className="absolute top-1/2 left-0 w-[100%] h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 rotate-45 origin-top-left" />

        <div className="absolute left-1/4 top-0 h-[60vh] -rotate-45 w-px bg-yellow-500/10" />
        
        <div className="absolute right-1/4 top-0 h-[60vh] -rotate-45 w-px bg-yellow-500/10" />

      </div>
      <FirstHomeSection />
      <AdminButton menuType="adminHomeSection" />
      <SecondHomeSection />
    </div>
  );
}
