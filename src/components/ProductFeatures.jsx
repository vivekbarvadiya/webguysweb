import Image from 'next/image'
import React from 'react'

export const ProductFeatures = ({ featureImage, desc }) => {
    return (
        <div className="w-1/3 p-10 rounded-3xl flex flex-col justify-center items-center gap-2  bg-[#FFFFFF]">
            <Image src={featureImage} alt={desc} />
            <p className='text-black text-xl font-semibold'>{desc}</p>
        </div>
    )
}
