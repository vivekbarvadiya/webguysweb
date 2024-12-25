import Image from 'next/image'
import React from 'react'

const ColorComp = ({ img, h1, h2, h3, h4 }) => {
    return (
        <>
            <h1 className='text-3xl font-bold text-center text-black '> {h1} <span className='text-[#01AFF1]'> {h2} </span> {h3} <br /> {h4} </h1>
            <div className="flex w-2/3 m-auto p-10 items-center justify-center gap-10">

                <div className='space-y-6 text-black text-md '>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <br />
                    <p>

                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <Image src={img} alt='img' />
            </div>
        </>

    )
}

export default ColorComp