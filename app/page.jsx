import React from 'react';
import { fontPrincipal } from "@/components/fonts"
import HomePage from "./inicio/HomePage"

export default function App(){
    return(
        <div className={`${fontPrincipal.className}`}>
            <HomePage />
        </div>
    )
}