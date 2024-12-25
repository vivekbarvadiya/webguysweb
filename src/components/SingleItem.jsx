import Image from 'next/image'
import React from 'react'

function SingleItem({ img, name, itemId, brand }) {
  return (
    <div className=" bg-[#FFFFFF] rounded-2xl border shadow-xl">
      <Image src={img} alt="innovation 1 image" />
      <div className="p-5">
        <p className="font-bold mb-2">{name}</p>
        <p className="text-sm mb-1"><span className="font-bold text-sm">ITEM# : </span> {itemId}</p>
        <p className="font-bold text-sm">BRAND : <span className="text-[#01AFF1] text-sm">{brand}</span></p>
      </div>
      <div className="flex justify-center pb-4">
        <button className="text-sm bg-[#01AFF1] text-white font-bold p-4 w-4/5 m-2 rounded-full uppercase">Request a quote</button>
      </div>
    </div>
  )
}

export default SingleItem