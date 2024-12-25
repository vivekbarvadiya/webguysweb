import Navbar from '@/components/Navbar'
import React from 'react'
import vector1Img from '../../../public/heroofall/website/vector1.png';
import vector2Img from '../../../public/heroofall/website/vector2.png';
import vector3Img from '../../../public/heroofall/website/vector3.png';
import { ProductFeatures } from '@/components/ProductFeatures';
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import UniqueLine from '@/components/UniqueLine';
import MainComp from '@/components/MainComp';
import Image from 'next/image';
import portfolio1Img from "../../../public/heroofall/website/portfolio1.png";
import portfolio2Img from "../../../public/heroofall/website/portfolio2.png";
import portfolio3Img from "../../../public/heroofall/website/portfolio3.png";
import Pricing from '@/components/Pricing';


const Website = () => { 
    const productData = [
        {
            featureImage: vector1Img,
            desc: "CUSTOM WEB DESIGNS"
        },
        {
            featureImage: vector2Img,
            desc: "SEO OPTIMIZATION"
        },
        {
            featureImage: vector3Img,
            desc: "MOBILE FRIENDLY LAYOUTS"
        }
    ]

    const basic = [
        "Prebuilt Template based Website",
        "Functional website",
        "Content upload",
        "1-2 pages (up to 5 sections)",
        "2 plugins/extensions",
        "Opt-in form",
        "Social media icons",
        "Free high-quality images",
        "Fully responsive",
        "Mobile friendly",
        "Fully secured",
        "SEO optimized",
        "Easy to manage admin panel",
        "SSL certificate (secured HTTPS)",
        "Turbo fast web hosting",
        "Lifetime management & support",
        "Unlimited revisions"
    ];

    const standard = ["Custom Template Design (UI/UX)",
        "Functional website",
        "Premium Widgets and addons",
        "Content upload",
        "Up to 5-6 pages",
        "4 plugins/extensions",
        "Opt-in form",
        "Social media icons",
        "Free high-quality images",
        "Fully responsive",
        "Mobile friendly",
        "Fully secured",
        "SEO optimized",
        "Speed optimized",
        "Easy to manage admin panel",
        "SSL Certificate (Secured HTTPS)",
        "Turbo fast web hosting",
        "Lifetime management & support",
        "Unlimited revisions"]

    const custom = ["Unlimited Sites",
        "Unlimited Tasks",
        "Custom UI/UX Design",
        "Custom Web App",
        "Custom Plugin",
        "Custom Functionality",
        "API Implementation",
        "No Limitation on Pages",
        "Custom Web Hosting",
        "Unlimited Revisions",
        "White-label",
        "Dedicated Project Manager",
        "Vetted Senior Developers",
        "Dedicated QA Team Ensures Quality",
        "Exclusive Customer Support",
        "Live Chat / Instant Messaging"]

    return (
        <>

            <Navbar />
            {/* Website page */}
            <div className=''>
                <MainComp name={"Website"} img={'/heroofall/signage/signagemain.png'} line1={"Professional Website Services for "} line2={"Your Car Wash Business!"} />

                <div className='bg-white'>

                    <div className='p-20'>
                        <h1 className='text-3xl font-bold text-black text-center'>Our <span className='text-[#01AFF1]'>Portfolio</span></h1>
                        <div className="photos flex gap-5 justify-center items-start mt-10">
                            <Image src={portfolio1Img} alt='images' />
                            <Image src={portfolio2Img} alt='images' />
                            <Image src={portfolio3Img} alt='images' />
                        </div>
                    </div>


                    <div className="p-20 bg-[#212121]">
                        <h1 className='text-3xl font-bold text-center'>Package & Pricing</h1>
                        <div className="w-2/3 m-auto flex justify-center items-center gap-5 mt-5 text-black">
                            <Pricing basic={basic} bgColor={"bg-[#FFFFFF]"} textColor={" text-[#30ADE3]"} text2Color={"text-black"} type={"website"} priceName={"basic"} price={'$ 0.00'}/>
                            <Pricing basic={standard} bgColor={"bg-[#FFFFFF]"} textColor={" text-[#30ADE3]"} text2Color={"text-black"} type={"website"} priceName={"Standard"} price={'$ 0.00'}/>
                            <Pricing basic={custom} bgColor={"bg-[#30ADE3]"} textColor={" text-[#FFFFFF]"} text2Color={"text-white"} type={"Agency"} priceName={"Custom"} price={'$ 0.00'}/>

                        </div>

                    </div>


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

                    <UniqueLine t1="Boost your online presence with our website services." t2="" />
                    <NewsLetter />
                    <Footer />


                </div>
            </div>
        </>
    )
}

export default Website