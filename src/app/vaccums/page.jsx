import Navbar from '@/components/Navbar'
import React from 'react'
import vaccume1Img from "../../../public/heroofall/vaccums/vaccum1.png"
import vaccume2Img from "../../../public/heroofall/vaccums/vaccum2.png"
import vaccume4Img from "../../../public/heroofall/vaccums/vaccum4.png"
import vaccume3Img from "../../../public/heroofall/vaccums/vaccum3.png"
import SingleItem from '@/components/SingleItem';
import vector1Img from '../../../public/heroofall/vaccums/vector1.png';
import vector2Img from '../../../public/heroofall/vaccums/vector2.png';
import vector3Img from '../../../public/heroofall/vaccums/vector3.png';
import { ProductFeatures } from '@/components/ProductFeatures';
import vaccumeImg from "../../../public/heroofall/vaccums/veccume.png";
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import Installation from '@/components/Installation';
import UniqueLine from '@/components/UniqueLine';
import MainComp from '@/components/MainComp';
import ColorComp from '@/components/ColorComp';
import Product from '@/components/Product'


const Vaccums = () => {

    const data = [{ img: vaccume1Img, name: "SONNY’S SMARTSTOP 1", itemId: "SD_SMARTSTOP 1", brand: "Sonny's 1" }, { img: vaccume2Img, name: "SONNY’S SMARTSTOP 2", itemId: "SD_SMARTSTOP 2", brand: "Sonny's 2" }, { img: vaccume3Img, name: "SONNY’S SMARTSTOP 3", itemId: "SD_SMARTSTOP 3", brand: "Sonny's 3" }, { img: vaccume4Img, name: "SONNY’S SMARTSTOP 4", itemId: "SD_SMARTSTOP 4", brand: "Sonny's 4" }]

    const productData = [
        {
            featureImage: vector1Img,
            desc: "SUPER SUCTION POWER"
        },
        {
            featureImage: vector2Img,
            desc: "EASY TO USE DESIGNS"
        },
        {
            featureImage: vector3Img,
            desc: "DURABLE CONSTRUCTION"
        }
    ]
    return (
        <>

            <Navbar />
            {/* Vaccums page */}
            <div className=''>
                <MainComp name={"Vaccums"} img={'/heroofall/vaccums/vaccummain.png'} line1={"Powerful Vacuums for"} line2={"a Spotless Clean!"} />

                <div className='bg-[#f3f3f3]'>

                    <Product data={data} name={"VACCUMS"} />



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

                    <ColorComp img={vaccumeImg} h1={"Custom solutions tailoring"} h2={"Vacuum Systems"} h3={" to meet"} h4={"specific business needs. "} />
                    <Installation />
                    <UniqueLine t1="Our vacuums ensure a thorough interior" t2="clean for every vehicle" />
                    <NewsLetter />
                    <Footer />


                </div>
            </div>
        </>
    )
}

export default Vaccums