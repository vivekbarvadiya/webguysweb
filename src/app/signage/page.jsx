import Navbar from '@/components/Navbar'
import React from 'react'
import signage1Img from "../../../public/heroofall/signage/signage1.png"
import signage2Img from "../../../public/heroofall/signage/signage2.png"
import signage4Img from "../../../public/heroofall/signage/signage4.png"
import signage3Img from "../../../public/heroofall/signage/signage3.png"
import SingleItem from '@/components/SingleItem';
import vector1Img from '../../../public/heroofall/signage/vector1.png';
import vector2Img from '../../../public/heroofall/signage/vector2.png';
import vector3Img from '../../../public/heroofall/signage/vector3.png';
import { ProductFeatures } from '@/components/ProductFeatures';
import signageImg from "../../../public/heroofall/signage/signage.png";
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import Installation from '@/components/Installation';
import UniqueLine from '@/components/UniqueLine';
import MainComp from '@/components/MainComp';
import ColorComp from '@/components/ColorComp';
import Product from '@/components/Product'


const Signage = () => {
    
    
    const data = [{ img: signage1Img, name: "SONNY’S SMARTSTOP 1", itemId: "SD_SMARTSTOP 1", brand: "Sonny's 1" }, { img: signage2Img, name: "SONNY’S SMARTSTOP 2", itemId: "SD_SMARTSTOP 2", brand: "Sonny's 2" }, { img: signage3Img, name: "SONNY’S SMARTSTOP 3", itemId: "SD_SMARTSTOP 3", brand: "Sonny's 3" }, { img: signage4Img, name: "SONNY’S SMARTSTOP 4", itemId: "SD_SMARTSTOP 4", brand: "Sonny's 4" }]

    const productData = [
        {
            featureImage: vector1Img,
            desc: "Vibrant colors"
        },
        {
            featureImage: vector2Img,
            desc: "Custom designs"
        },
        {
            featureImage: vector3Img,
            desc: "Weather-resistant materials"
        }
    ]
    return (
        <>

            <Navbar />
            {/* Signage page */}
            <div className=''>
                <MainComp name={"Signage"} img={'/heroofall/signage/signagemain.png'} line1={"Advanced Controls for "} line2={"Precision and Ease!"} />

                <div className='bg-[#F3F3F3]'>

                    <Product data={data} name={"SIGNAGE"}/>



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

                    <ColorComp img={signageImg} h1={"Custom Solutions"} h2={"Tailoring signage"} h3={"to fit your"} h4={"brand and location."} />
                    <Installation />
                    <UniqueLine t1="Our control systems simplify car wash management." t2="" />
                    <NewsLetter />
                    <Footer />


                </div>
            </div>
        </>
    )
}

export default Signage