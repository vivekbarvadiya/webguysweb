import React from 'react'

const Pricing = ({ basic, bgColor, text2Color, textColor, type, priceName, price }) => {

    let TF = false;
    if(type!=="Agency"){
        TF = true
    }else if(priceName!=="Digital"){
        TF = true
    }


    return (
        <div className={`basic ${bgColor} p-5 rounded-xl w-30%`}>
            <h1 className={`text-2xl font-bold ${textColor}`}>{priceName}</h1>
            <p className={`text-md mb-3 ${text2Color}`}>{type}</p>
            <h1 className={`text-4xl font-bold ${textColor} mb-3`}>{price}</h1>
            <ul className={`list-disc ml-5 space-y-1.5 ${text2Color}`}>
                {
                    basic.map((item) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
            {
                TF ?
                    <button className="text-sm bg-[#01AFF1] text-white font-bold p-4 px-9 mt-5 rounded-full uppercase">Book now</button>
                    :
                    <button className="text-sm bg-white text-[#01AFF1] font-bold p-4 px-9 mt-5 rounded-full uppercase">Book now</button>

            }
        </div>
    )
}

export default Pricing