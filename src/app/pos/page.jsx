import Navbar from '@/components/Navbar'
import React from 'react'
import pos1Img from "../../../public/heroofall/pos/pos1.png"
import pos2Img from "../../../public/heroofall/pos/pos2.png"
import pos4Img from "../../../public/heroofall/pos/pos4.png"
import pos3Img from "../../../public/heroofall/pos/pos3.png"
import SingleItem from '@/components/SingleItem';
import vector1Img from '../../../public/heroofall/pos/vector1.png';
import vector2Img from '../../../public/heroofall/pos/vector2.png';
import vector3Img from '../../../public/heroofall/pos/vector3.png';
import { ProductFeatures } from '@/components/ProductFeatures';
import vaccumeImg from "../../../public/heroofall/vaccums/veccume.png";
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import Installation from '@/components/Installation';
import UniqueLine from '@/components/UniqueLine';
import MainComp from '@/components/MainComp';
import ColorComp from '@/components/ColorComp';
import Product from '@/components/Product'


const Pos = () => {


    const data = [{ img: pos1Img, name: "SONNY’S SMARTSTOP 1", itemId: "SD_SMARTSTOP 1", brand: "Sonny's 1" }, { img: pos2Img, name: "SONNY’S SMARTSTOP 2", itemId: "SD_SMARTSTOP 2", brand: "Sonny's 2" }, { img: pos3Img, name: "SONNY’S SMARTSTOP 3", itemId: "SD_SMARTSTOP 3", brand: "Sonny's 3" }, { img: pos4Img, name: "SONNY’S SMARTSTOP 4", itemId: "SD_SMARTSTOP 4", brand: "Sonny's 4" }]

    const productData = [
        {
            featureImage: vector1Img,
            desc: "Integrated reporting tools"
        },
        {
            featureImage: vector2Img,
            desc: "User-friendly interface"
        },
        {
            featureImage: vector3Img,
            desc: "Quick Transaction Process"
        }
    ]
    return (
        <>

            <Navbar />
            {/* POS page */}
            <div className=''>
                <MainComp name={"Point Of Sale"} img={'/heroofall/pos/posmain.png'} line1={"Seamless Point of Sales Systems for "} line2={"Efficient Operations"} />

                <div className='bg-[#f3f3f3]'>

                    <Product data={data} name={"POINT OF SALE"}/>



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
                    <UniqueLine t1="Upgrade your payment systems with our" t2="modern POS solutions." />
                    <NewsLetter />
                    <Footer />


                </div>
            </div>
        </>
    )
}

export default Pos