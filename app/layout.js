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
              <body className={`${fontPrincipal.className}`}>
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
