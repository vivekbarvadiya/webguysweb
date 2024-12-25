import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import TunnelsImg from "../../../public/heroofall/tunnels/tunnels.png";
import Tunnel1 from '../../../public/heroofall/tunnels/tunnel1.png'
import Tunnel2 from '../../../public/heroofall/tunnels/tunnel2.png'
import innovation1Img from "../../../public/innovation/innovation1.png";
import innovation2Img from "../../../public/innovation/innovation2.png";
import innovation3Img from "../../../public/innovation/innovation3.png";
import innovation4Img from "../../../public/innovation/innovation4.png";
import SingleItem from '@/components/SingleItem';
import FooterLogo from "../../../public/footerLogo.png"
import vectorImg from '../../../public/heroofall/tunnels/vector.png';
import prfeature1 from '../../../public/heroofall/tunnels/prfeature1.png'
import prfeature2 from '../../../public/heroofall/tunnels/prfeature2.png'
import prfeature3 from '../../../public/heroofall/tunnels/prfeature3.png'
import { ProductFeatures } from '@/components/ProductFeatures';
import tunnelsCar from "../../../public/heroofall/tunnels/tunnelscar.png";
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import Installation from '@/components/Installation';
import UniqueLine from '@/components/UniqueLine';
import MainComp from '@/components/MainComp';
import ExploreComp from '@/components/ExploreComp';
import Product from '@/components/Product';


const Tunnels = () => {
    const data = [{ img: innovation1Img, name: "SONNY’S SMARTSTOP 1", itemId: "SD_SMARTSTOP 1", brand: "Sonny's 1" }, { img: innovation2Img, name: "SONNY’S SMARTSTOP 2", itemId: "SD_SMARTSTOP 2", brand: "Sonny's 2" }, { img: innovation3Img, name: "SONNY’S SMARTSTOP 3", itemId: "SD_SMARTSTOP 3", brand: "Sonny's 3" }, { img: innovation4Img, name: "SONNY’S SMARTSTOP 4", itemId: "SD_SMARTSTOP 4", brand: "Sonny's 4" }]

    const productData = [
        {
            featureImage: prfeature1,
            desc: "High-pressure water jets"
        },
        {
            featureImage: prfeature2,
            desc: "Soft-touch brushes"
        },
        {
            featureImage: prfeature3,
            desc: "Advanced drying systems"
        }
    ]
    return (
        <>

            <Navbar />
            {/* Tunnels page */}
            <div className=''>
                <MainComp name={"Tunnels"} img={'/heroofall/tunnels/tunnels.png'} line1={"Efficient Car Wash Tunnels"} line2={"for Ultimate Cleaning Power"} />

                <div className='bg-[#F3F3F3]'>


                    <Product data={data} name={"TUNNELS"}/>

                    <ExploreComp />


                    <div className="text-center p-10 my-10">
                        <h1 className='text-3xl font-bold text-black'>Product <span className='text-[#01AFF1]'>Features</span></h1>
                        <div className="flex w-2/3  m-auto justify-center items-center gap-5 p-5">

                            {
                                productData.map((item, index) => {
                                    return <ProductFeatures featureImage={item.featureImage} desc={item.desc} />
                                })
                            }
                        </div>
                    </div>


                    <div className="flex w-2/3 m-auto p-10 items-center justify-center gap-10">

                        <div className='space-y-6 text-black text-sm'>
                            <h1 className='text-3xl font-bold text-black'>Washguys can tailor tunnel <br /> systems to suit your <br /> specific needs. <span className='text-[#01AFF1]'>Here’s How.</span></h1>

                            <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex <br /> ea commodo consequat.</p>

                            <p className='font-medium'>Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur <br /> sint occaecat cupidatat non proident, sunt in culpa <br /> qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className='bg-[#01AFF1] m-10 p-5 rounded-lg'>
                            <div className='p-30 -mt-10 -ml-10'>
                                <Image src={tunnelsCar} alt='tunnelsCar' />
                            </div>
                        </div>


                    </div>

                    <Installation />
                    <UniqueLine t1="Discover our state-of-the-art car wash tunnels" t2="designed for maximum efficiency and quality." />
                    <NewsLetter />
                    <Footer />


                </div>
            </div>
        </>
    )
}

export default Tunnels