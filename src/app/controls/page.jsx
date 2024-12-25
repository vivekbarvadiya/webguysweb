import Navbar from '@/components/Navbar'
import React from 'react'
import control1Img from "../../../public/heroofall/controls/control1.png"
import control2Img from "../../../public/heroofall/controls/control2.png"
import control4Img from "../../../public/heroofall/controls/control4.png"
import control3Img from "../../../public/heroofall/controls/control3.png"
import SingleItem from '@/components/SingleItem';
import vector1Img from '../../../public/heroofall/controls/vector1.png';
import vector2Img from '../../../public/heroofall/controls/vector2.png';
import vector3Img from '../../../public/heroofall/controls/vector3.png';
import { ProductFeatures } from '@/components/ProductFeatures';
import vaccumeImg from "../../../public/heroofall/controls/controls.png";
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import Installation from '@/components/Installation';
import UniqueLine from '@/components/UniqueLine';
import MainComp from '@/components/MainComp';
import ColorComp from '@/components/ColorComp';
import Product from '@/components/Product'


const Controls = () => {

    const data = [{ img: control1Img, name: "SONNY’S SMARTSTOP 1", itemId: "SD_SMARTSTOP 1", brand: "Sonny's 1" }, { img: control2Img, name: "SONNY’S SMARTSTOP 2", itemId: "SD_SMARTSTOP 2", brand: "Sonny's 2" }, { img: control3Img, name: "SONNY’S SMARTSTOP 3", itemId: "SD_SMARTSTOP 3", brand: "Sonny's 3" }, { img: control4Img, name: "SONNY’S SMARTSTOP 4", itemId: "SD_SMARTSTOP 4", brand: "Sonny's 4" }]

    const productData = [
        {
            featureImage: vector1Img,
            desc: "Customizable settings"
        },
        {
            featureImage: vector2Img,
            desc: "Reliable performance"
        },
        {
            featureImage: vector3Img,
            desc: "Intuitive Interfaces"
        }
    ]
    return (
        <>

            <Navbar />
            {/* Controls page */}
            <div className=''>
                <MainComp name={"Controls"} img={'/heroofall/controls/controlsmain.png'} line1={"Advanced Controls for "} line2={"Precision and Ease!"} />

                <div className='bg-[#F3F3F3]'>


                    <Product data={data} name={"CONTROLS"}/>


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

                    <ColorComp img={vaccumeImg} h1={"Custom Solutions Customizable"} h2={"POS systems"} h3={"to fit any"} h4={"car wash business size."} />
                    <Installation />
                    <UniqueLine t1="Our control systems simplify car wash management" t2="and offer seamless service!" />
                    <NewsLetter />
                    <Footer />


                </div>
            </div>
        </>
    )
}

export default Controls