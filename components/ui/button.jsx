"use client";
import { tv } from "tailwind-variants";

export const button = tv({
    base: "rounded-[15px] w-[100px] font-medium transition-all duration-300 ease-in-out",
    variants: {
        color: {
            green: "bg-green-500 text-white hover:bg-green-600 active:bg-green-700 active:text-white",

            blue: "bg-blue-500 text-white hover:bg-blue-600  active:bg-blue-700 active:text-white",

            red: "bg-red-500 text-white hover:bg-red-600  active:bg-red-700 active:text-white",

            answer: "bg-teal-500 text-white hover:bg-teal-600  active:text-teal-700 active:text-white",

            disabled:
                "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 active:text-white",

        },
        margin: {
            marginTop: "mt-2",
            margin: "m-4",
            "m-2":"m-2",
            marginBottom:"mb-5",
            marginLeft:"ms-2"
        },
        padding: {
            padding: "p-1",
            padding2: "p-2",
        },
        width: {
            "fit-content": "w-fit",
        },
        display:{
            block:'block'
        }
    },
});
<p className=" "></p>;

const Button = ({ input, color,customColor,margin,customMargin,customPadding, type, padding, onClick, width,display }) => {
    return (
        <>
            <button
                id={input} style={{backgroundColor:customColor,margin:customMargin,padding:customPadding,width:width}}
                className={button({ color, margin, padding,display })}
                onClick={onClick}
                type={type}
            >
                {input}
            </button>
        </>
    );
};

export default Button;
