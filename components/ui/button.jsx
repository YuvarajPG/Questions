'use client';
import { tv } from 'tailwind-variants';

export const button = tv({
    base: 'rounded-[15px] w-[100px] font-medium transition-all duration-300 ease-in-out',
    variants: {
        color: {
            green: 'bg-green-500 text-black hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white',

            blue: 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white active:bg-blue-700 active:text-white',

            red: 'bg-red-500 text-white hover:bg-red-600 hover:text-white active:bg-red-700 active:text-white',
        },
        margin: {
            marginTop: 'mt-2',
            margin: 'm-4',
        },
        padding: {
            padding: 'p-1',
            padding2: 'p-2',
        },
        width: {
            'fit-content': 'w-fit',
        },
    }
});


const Button = ({ input, color, margin,type,padding,onClick ,width}) => {
    return (
        <>
            <button id={input} className={button({ color, margin, padding,width })}onClick={onClick} type={type}>
                {input}
            </button>
        </>
    )
}

export default Button