import React from 'react'

const UniqueLine = ({t1,t2}) => {
    return (
        <div className='bg-gradient-to-r from-[#0D2D75] to-[#111734] p-14 font-bold text-3xl text-white text-center'>
            <p >{t1}</p>
            <p className='text-[#01AFF1]'>{t2}</p>
        </div>
    )
}

export default UniqueLine