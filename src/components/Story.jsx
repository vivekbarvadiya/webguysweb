import Image from 'next/image'
import React from 'react'

const Story = ({ img, storyName, storyDesc }) => {
    return (
        <div className="story text-center w-30% pb-5 text-black flex flex-col justify-center items-center bg-white rounded-xl space-y-2">
            <Image src={img} alt='story 1' />
            <div className='px-6'>
                <p className='text-xl font-bold mt-3'>{storyName}</p>
                <p className='font-medium mb-3'>{storyDesc} </p>
                <button className="text-sm bg-[#01AFF1] text-white p-4 px-9 m-2 rounded-full font-bold">Read More</button>
            </div>
        </div>
    )
}

export default Story