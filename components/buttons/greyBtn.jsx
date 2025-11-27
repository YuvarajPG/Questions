'use client';

const button = ({ input }) => {
    return (
        <>
            <button className='bg-gray-400 rounded-[15px] w-[100px] text-white font-semibold hover:bg-gray-500 hover:text-black transition-all duration-300 ease-in-out'>
                {input}
            </button>
        </>
    )
}



export default button


