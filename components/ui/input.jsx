"use client";

import { tv } from "tailwind-variants";

export const input = tv({
    base: 'peer block w-full px-3 py-2 border rounded bg-amber-100 focus:outline-none focus:ring-3 text-black focus:ring-green-400 relative',
    variants: {
        width: {
            full: 'w-full',
            half: 'w-1/2',
        },
        display: {
            block: 'block',
        },
        //variants can be added here in future if needed 
    }
});

const Input = ({ type, id, autoComplete, pageHolder, width ,display}) => {
    return (
        <>
            <input className={input({ width,display })}
                type={type} id={id} autoComplete={autoComplete} placeholder={pageHolder} />
        </>
    )
}

export default Input;
