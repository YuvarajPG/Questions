'use client'

const blueBtn = ({ input }) => {
    return (
        <>
            <button className='bg-green-500 rounded-[15px] w-[100px] text-black font-medium  hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out active:bg-green-700 active:text-white py-0.5 my-2.5'>
                {input}
            </button>
        </>
    )
}

export default blueBtn