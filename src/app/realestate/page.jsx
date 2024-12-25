import Navbar from '@/components/Navbar'
import React from 'react'
import vector1Img from '../../../public/heroofall/realestate/vector1.png';
import vector2Img from '../../../public/heroofall/realestate/vector2.png';
import vector3Img from '../../../public/heroofall/realestate/vector3.png';
import { ProductFeatures } from '@/components/ProductFeatures';
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import UniqueLine from '@/components/UniqueLine';
import MainComp from '@/components/MainComp';
import Image from 'next/image';
import story1Img from "../../../public/heroofall/realestate/story1.png";
import story2Img from "../../../public/heroofall/realestate/story2.png";
import story3Img from "../../../public/heroofall/realestate/story3.png";
import Pricing from '@/components/Pricing';
import Story from '@/components/Story';


const RealEstate = () => {
    const productData = [
        {
            featureImage: vector1Img,
            desc: "Strategic site selection"
        },
        {
            featureImage: vector2Img,
            desc: "Leasing and purchasing assistance"
        },
        {
            featureImage: vector3Img,
            desc: "Market analysis"
        }
    ]

    const basic = [
        "Brand Strategy Development",
        "Logo design (2 initial concepts, up to 2 rounds of revisions)",
        "Color scheme creation",
        "Brand Typography and font selection",
        "Basic brand guidelines",
        "Business card design (1 concept, up to 2 rounds of revisions)"
    ]

    const standard = [
        "Content strategy development",
        "4 blog posts per month (up to 1,000 words each, for 6 months)",
        "Social media strategy and management (up to 4 platforms, up to 2 posts per week, for 6 months)",
        "Social media content development (up to 200 posts, including copy and graphics)",
        "Email marketing (up to 2 campaigns per month, for 6 months)"
    ]

    const custom = [
        "Basic Growth Marketing Package: $5,000 - $7,500 per month",
        "Email marketing and marketing automation (up to 2 campaigns per month, with up to 10,000 emails sent per campaign)",
        "On-page SEO optimization (up to 10 pages)",
        "Conversion rate optimization (for 5-10 landing pages and/or web pages)",
        "Monthly analytics report"
    ]

    return (
        <>

            <Navbar />
            {/* real estate page */}
            <div className=''>
                <MainComp name={"Real Estate"} img={'/heroofall/realestate/realestatemain.png'} line1={"Prime Real Estate Solutions "} line2={"for Your Car Wash"} />

                <div className='bg-[#F3F3F3]'>
                    <div className="text-center py-20 pt-36 my-10">
                        <h1 className='text-3xl font-bold text-black'>Service Offered</h1>
                        <div className="flex w-2/3  m-auto justify-center items-center gap-5 p-5">
                            {
                                productData.map((item, index) => {
                                    return <ProductFeatures featureImage={item.featureImage} desc={item.desc} />
                                })
                            }
                        </div>
                    </div>

                    <div className="px-32 pb-12">
                        <h1 className='text-center font-bold text-3xl text-black'>Success Stories</h1>
                        <div className="w-2/3 flex justify-center items-center m-auto gap-6 mt-6 ">
                            <Story img={story1Img} storyName={"Success Story 1"} storyDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "} />
                            <Story img={story2Img} storyName={"Success Story 2"} storyDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "} />
                            <Story img={story3Img} storyName={"Success Story 3"} storyDesc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "} />

                        </div>
                        <div className="text-center p-10">
                            <button className="text-sm bg-white text-[#01AFF1] p-4 px-14 m-2 rounded-full border border-[#01AFF1]">View All</button>

                        </div>
                    </div>

                    <UniqueLine t1="Find the perfect location with our real estate services." t2="" />
                    <NewsLetter />
                    <Footer />


                </div>
            </div>
        </>
    )
}

export default RealEstate