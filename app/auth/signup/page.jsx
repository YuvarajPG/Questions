"use client";
import Link from "next/link";
import Button from "../../../components/ui/button.jsx";
import Input from "../../../components/ui/input.jsx";
import UnderConstruction from "../../../components/underConstruction.jsx";
import { useState, useEffect } from "react";

const signup = () => {
    const [isUnderConstruction, setIsUnderConstruction] = useState(true);
    useEffect(() => {
        const underConstructionFlag = localStorage.getItem(
            "isUnderConstruction"
        );
        setIsUnderConstruction(underConstructionFlag === "true");
        // Logic to handle under construction state if needed
    }, []);

    return (
        <>
            {isUnderConstruction ? (
                <UnderConstruction />
            ) : (
                <>
                    <div className="bg-auto h-[90vh] flex justify-center items-center ">
                        <form action="" className="">
                            <div className="relative">
                                <label htmlFor="email">email</label>
                                <Input
                                    autoComplete="off"
                                    type="text"
                                    id="email"
                                />
                            </div>
                            <div className="relative mt-2">
                                <label htmlFor="">password</label>
                                <Input
                                    autoComplete="off"
                                    type="password"
                                    id="password"
                                />
                            </div>
                            <div className="relative mt-2">
                                <label htmlFor="">confirm password</label>
                                <Input
                                    autoComplete="off"
                                    type="password"
                                    id="confirm-password"
                                />
                            </div>
                            <Button
                                input="Sign Up"
                                color="green"
                                margin="marginTop"
                            />
                            <br />
                            <span className="mt-10">
                                already have an account?
                            </span>
                            &nbsp;
                            <Link href="/auth/login">login</Link>
                        </form>
                    </div>
                </>
            )}
        </>
    );
};

export default signup;
