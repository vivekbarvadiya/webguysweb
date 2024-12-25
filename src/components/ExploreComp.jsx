import Image from 'next/image'
import React from 'react'

import FooterLogo from "../../public/footerLogo.png"
import Tunnel1 from '../../public/heroofall/tunnels/tunnel1.png'
import Tunnel2 from '../../public/heroofall/tunnels/tunnel2.png'

import vectorImg from '../../public/heroofall/tunnels/vector.png';

const ExploreComp = () => {
    return (
        <div className="flex mt-10 p-10 w-full m-auto gap-4 justify-center items-center">
            <div className="flex bg-[#09225A] rounded-3xl p-5 gap-6">
                <Image src={Tunnel1} alt='tunnel1' />
                <div className='space-y-5'>
                    <div className="flex items-center gap-3">
                        <Image src={FooterLogo} alt='footer logo' height={80} />
                        <div>
                            <p className='text-[#01AFF1] text-2xl font-bold' >Washguys</p>
                            <p className='text-4xl font-bold'>Tunnels</p>
                        </div>
                    </div>
                    <p>
                        Discover the ultimate car wash efficiency with <br /> our durable corrosion-resistant QUAD-X <br /> Aluminum car wash equipment components. <br /> Elevate your car wash operations with <br />precision and speed, all backed by our <br /> lifetime limited frame warranty.
                    </p>
                    <button className="text-sm bg-[#01AFF1] text-white font-bold p-4 px-9 m-2 rounded-full uppercase">{`Explore >`}</button>

                </div>
            </div>
            <div className="flex bg-[#1F1F1F] rounded-3xl p-5 gap-6">
                <div className='space-y-8'>
                    <div className="flex items-center gap-3">
                        <Image src={vectorImg} alt='footer logo' />
                    </div>
                    <p>
                        Durable 304 Stainless Steel structure with <br /> 180-grit brush finish delivers strength, <br /> corrosion resistance, and timeless beauty. <br /> Spotless, dry, shiny vehicles with an open <br /> customer tunnel experience that stands apart <br /> from the competition.
                    </p>
                    <button className="text-sm bg-[#01AFF1] text-white font-bold p-4 px-9 m-2 rounded-full uppercase">{`Explore >`}</button>

                </div>
                <Image src={Tunnel2} alt='tunnel1' />
            </div>
        </div>
    )
}

export default ExploreComp