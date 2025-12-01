"use client";
import Button from "../../../components/ui/button.jsx";
import Link from "next/link";
import InputBox from "../../../components/ui/input.jsx";
import { useRef, useState, useEffect } from "react";
import Input from "../../../components/ui/input.jsx";
import UnderConstruction from "../../../components/underConstruction.jsx";

const login = () => {
    const [isUnderConstruction, setIsUnderConstruction] = useState(false);
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
                <div className="bg-auto h-[90vh] flex justify-center items-center ">
                    <form action="" className="">
                        <label htmlFor="email">email</label>
                        <InputBox
                            href={"/auth/login"}
                            type="text"
                            id={"email"}
                            autoComplete="off"
                        />
                        <label htmlFor="password">password</label>
                        <InputBox
                            type="password"
                            id={"password"}
                            autoComplete="off"
                        />
                        <Button
                            input={"Login"}
                            color="green"
                            margin="marginTop"
                            type={"submit"}
                        />
                        <br />
                        don't have an account? &nbsp;
                        <Link href={"/auth/signup"}>sign up</Link>
                    </form>
                </div>
            )}
        </>
    );
};

export default login;
