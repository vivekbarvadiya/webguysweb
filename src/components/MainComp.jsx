import Image from 'next/image'
import React from 'react'
import FooterLogo from "../../public/footerLogo.png";


const MainComp = ({name,img,line1,line2}) => {
    return (
        <div
            className="bg-cover relative -my-11 -z-30"
            style={{
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${img})`,
                height: '45vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width:'100vw'
            }}
        >
            <div className="flex rounded-3xl p-20 gap-6">
                <div className='space-y-5 ml-[250px]'>
                    <div className="flex items-center gap-3">
                        <Image src={FooterLogo} alt='footer logo' height={80} />
                        <div>
                            <p className='text-[#01AFF1] text-2xl font-bold' >Washguys</p>
                            <p className='text-4xl font-bold'>{name}</p>
                        </div>
                    </div>
                    <p className='text-4xl font-bold'>
                        {line1} <br />
                        <span className='text-[#01AFF1]'> {line2} </span>
                    </p>
                    <button className="text-sm bg-[#01AFF1] text-white font-bold p-4 px-9 m-2 rounded-full uppercase">Learn More</button>

                </div>
            </div>

        </div>
    )
}

export default MainComp