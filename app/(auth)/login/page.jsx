"use client";
import Button from "../../../components/buttons/greenBtn";
import Link from "next/link";

const login = () => {
    return (
        <>
            <div className="bg-auto h-[90vh] flex justify-center items-center ">
                <form action="" className="">
                    <div className="relative">
                        <input
                            type="text"
                            id="email"
                            autoComplete="off"
                            className="peer block w-full px-3 py-2 border rounded bg-amber-100 focus:outline-none focus:ring-3 text-black focus:ring-green-400"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-sm transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 text-black peer-focus:text-white peer-focus:top-0 peer-focus:-translate-y-6 peer-focus:scale-90 origin-left font-semibold">
                            email
                        </label>
                    </div>
                    <div className="relative mt-7">
                        <input
                            type="password"
                            id="password"
                            autoComplete="off"
                            className="peer block w-full px-3 py-2 border rounded bg-amber-100 focus:outline-none focus:ring-3 text-black focus:ring-green-400"
                        />

                        <label
                            htmlFor="password"
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-sm transition-all pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:translate-y-0 text-black peer-focus:text-white peer-focus:top-0 peer-focus:-translate-y-6 peer-focus:scale-90 origin-left font-semibold">
                            password
                        </label>
                    </div>

                    <Button input={"Login"} />
                    <br />
                    dont have an account? &nbsp;
                    <Link href={"/signup"}>sign up</Link>
                </form>
            </div>
        </>
    );
};

export default login;
