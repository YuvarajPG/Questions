"use client";
import Button from "../components/ui/button.jsx";
import Link from "next/link";

const Homepage = () => {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center bg-linear-to-b from-[#004E92] to-[#001452] gap-6 px-4">
            <p className="text-6xl text-white">welcome</p>
            <p className="text-2xl text-white">To my website</p>

            <div className="items-center">
                <Link href={"/auth/login"}>
                    <Button
                        input={"Get Started"}
                        color="green"
                        padding="padding"
                        type={"button"}
                    />
                </Link>
                <Link href="/admin">
                    <Button color="blue" input='admin' padding='padding' margin="marginLeft" />
                </Link>
            </div>
        </div>
    );
};

export default Homepage;
