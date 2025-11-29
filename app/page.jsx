"use client";
import { useState, useEffect } from "react";
import Homepage from "../components/Homepage";
import Question from "../components/Question";
import Button from "../components/ui/button";
import UnderConstruction from "../components/underConstruction";

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isUnderConstruction, setIsUnderConstruction] = useState(true);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(saved === "true");
    }, []);

    useEffect(() => {
        const underConstructionFlag = localStorage.getItem(
            "isUnderConstruction"
        );
        setIsUnderConstruction(underConstructionFlag === "true");
        // Logic to handle under construction state if needed
    }, []);

    if (!mounted) {
        return <Homepage />; // server-safe rendering
    }

    return (
        <>
            {isUnderConstruction ? (
                <UnderConstruction />
            ) : isLoggedIn ? (
                <>
                    <Question />
                </>
            ) : (
                <Homepage />
            )}
        </>
    );
}
