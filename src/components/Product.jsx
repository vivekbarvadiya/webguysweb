import React from 'react'
import SingleItem from './SingleItem'

const Product = ({name,data}) => {
    return (
        <div className="w-2/3 m-auto mb-20 p-10">
            <h1 className="text-4xl py-10 text-center font-bold text-[#01AFF1]">FEATURED {name}</h1>
            <div className="flex gap-6 justify-center text-black">
                {data.map((item, index) => { return <SingleItem img={item.img} name={item.name} itemId={item.itemId} brand={item.brand} /> })}
            </div>
        </div>
    )
}

export default Product