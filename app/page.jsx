"use client";
import { useState, useEffect } from "react";
import Homepage from "../components/Homepage";
import Question from "../components/Question";
import Button from "../components/ui/button";
import UnderConstruction from "../components/underConstruction";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    
    const [isUnderConstruction, setIsUnderConstruction] = useState(true);
    /*TO SET THE WEB TO UNDER CONSTRUCTION  */
    
    useEffect(() => {
        const isLoggedInFlag = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(isLoggedInFlag === "true");
    }, []);
    
    useEffect(() => {
        const underConstructionFlag = localStorage.getItem(
            "isUnderConstruction"
        );
        setIsUnderConstruction(underConstructionFlag === "true");
        // Logic to handle under construction state if needed
    }, []);
    
    // const [mounted, setMounted] = useState(false);
    /*  if (!mounted) {
        return <Homepage />; // server-safe rendering
    } */

    return (
        <>
            {isUnderConstruction ? (
                <UnderConstruction />
            ) : (
                <>{isLoggedIn ? <Question /> : <Homepage />}</>
            )}
        </>
    );
}
