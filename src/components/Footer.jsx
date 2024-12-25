import React from 'react'
import footerLogo from "../../public/footerLogo.png"
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <div className="bg-[#09225A]">
                <div className=" w-4/5 m-auto grid grid-flow-col grid-cols-5 p-16">
                    <div className="text-sm space-y-4">
                        <Image src={footerLogo} alt="footer logo" />
                        <p>All Prices & Availability subject <br /> to change without notice.</p>
                        <p>For Sales & Customer Service <br />
                            Call <span className="text-[#01AFF1] font-bold"> 1-800-327-8723</span></p>
                    </div>
                    <div>
                        <p className="text-[#01AFF1] font-bold text-lg mb-3"> NAVIGATION </p>
                        <p> Tunnel </p>
                        <p> Vaccums </p>
                        <p> Point of Sale </p>
                        <p> Controls </p>
                        <p> Signage </p>
                        <p> Website </p>
                        <p> Marketing </p>
                    </div>
                    <div>
                        <p className="text-[#01AFF1] font-bold text-lg mb-3"> SUPPORT </p>
                        <p> Local Sales and Support </p>
                        <p> How Can We Help You? </p>
                        <p> RMA Request </p>
                        <p> Warranty </p>
                        <p> Product Manuals </p>
                        <p> Technical Support </p>
                        <p> Contact Us </p>
                    </div>
                    <div>
                        <p className="text-[#01AFF1] font-bold text-lg mb-3"> ABOUT US </p>
                        <p> Why WASHGUYS IS #1 </p>
                        <p> Meet Our Customers </p>
                        <p> News & Notices </p>
                        <p> Our History </p>
                        <p> Terms & Conditions </p>
                        <p> Careers </p>
                    </div>
                    <div>
                        <p className="text-[#01AFF1] font-bold text-lg mb-3"> LEARNING CENTER </p>
                        <p> Industry Articles </p>
                        <p> Car Wash Videos </p>
                        <p> Free Newsletters & Alerts </p>
                        <p> Free Catalogs </p>
                        <p> Tradeshow Calender </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#1B1B1B] p-5 text-center">
                <p>Copyright 2000-2024. All Rights Reserved. For Sales & Customer Service Call <span className="font-bold">1-800-327-8723</span></p>
            </div>
        </>
    )
}

export default Footer