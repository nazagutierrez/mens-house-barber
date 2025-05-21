import React from 'react';
import "./globals.css";
import Header from "../components/Header/Header";
import FixedSocial from "../components/common/FixedSocial";
import { UserContextProvider } from "../components/contexts/userContext";
import { StepContextProvider } from "../components/contexts/stepContext";
import { DateContextProvider } from "../components/contexts/dateContext";
import InitializeContexts from "../components/common/InitializeContexts";
import { fontPrincipal } from "../components/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
     <title>Mens House Barber</title>
    </head>
        <UserContextProvider>
          <DateContextProvider>
            <StepContextProvider>
              <body className={`${fontPrincipal.className} relative`}>
                <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden min-h-screen">
                  <div className="absolute top-0 left-0 w-[100%] h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 rotate-45 origin-top-left" />
                  <div className="absolute top-1/2 left-0 w-[100%] h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 rotate-45 origin-top-left" />

                  <div className="absolute left-1/4 top-0 h-[60vh] -rotate-45 w-px bg-yellow-500/10" />
                  
                  <div className="absolute right-1/4 top-0 h-[60vh] -rotate-45 w-px bg-yellow-500/10" />

                </div>
                <InitializeContexts />
                <Header />
                <FixedSocial />
                {children}
              </body>
            </StepContextProvider>
          </DateContextProvider>
        </UserContextProvider>
    </html>
  );
}
