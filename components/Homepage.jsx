"use client";
import Button from "../components/ui/button.jsx";
import Link from "next/link";
const Homepage = () => {
    return (
        <>
            <div className=" flex flex-col justify-center items-center bg-linear-to-b from-[#004E92] to-[#001452] gap-6 min-[320px]:min-h-[90vh] ">
                <p className=" text-6xl text-white">welcome</p>
                <p className=" text-2xl text-white">To my website</p>
                <div className=" items-center">
                    {
                        <Link href={"/login"}>
                            <Button
                                input={"Get Started"}
                                color="green"
                                padding="padding"
                                type={"button"}
                            />
                        </Link>
                    }
                </div>
            </div>
        </>
    );
};
export default Homepage;
