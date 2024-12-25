"use client";
import React, { useEffect, useState } from 'react'
import image1 from "../../public/image.png"
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';



const Navbar = () => {

    const route = usePathname();
    const [activeLink, setActiveLink] = useState("");

    const nav = [
        { navItem: "Home", path: "/" },
        { navItem: "Tunnels", path: "/tunnels" },
        { navItem: "Vacums", path: "/vaccums" },
        { navItem: "Point Of Scale", path: "/pos" },
        { navItem: "Controls", path: "/controls" },
        { navItem: "Signage", path: "/signage" },
        { navItem: "Website", path: "/website" },
        { navItem: "Marketing", path: "/marketing" },
        { navItem: "Real Estate", path: "/realestate" },

    ];

    useEffect(() => {
        const currentLink = nav.find(item => item.path === route);
        setActiveLink(currentLink ? currentLink.path : '');
    }, [route, nav])

    return (
        <>
            <div className="w-100 h-full bg-[#f3f3f3] relative -z-30">
                <div className="bg-[#09225A] w-full">
                    {/* headline */}
                    <div className="flex w-2/3 m-auto gap-3 justify-end items-center">
                        <p className="uppercase p-3 text-bold hover:bg-[#0C2F7D]">Contact Us!</p>
                        <p className="uppercase p-3 text-bold hover:bg-[#0C2F7D]">About US</p>
                    </div>


                </div>
                {/* navbar */}
                <div className="flex gap-4 w-2/3 m-auto p-3 justify-center items-center">
                    <Image src={image1} alt="Logo design" width={100} />
                    <input type="text" placeholder="Search by product name, items, brand etc." className="text-base h-10 w-2/4 focus rounded-3xl placeholder-gray-600 bg-white border border-black outline-none px-2" />
                    <button className="bg-[#09225A]
     color-white rounded-3xl p-3 w-1/5">
                        <div className="flex justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            Log In/ Sign Up
                        </div></button>
                    <button className="bg-white text-black border border-gray-500 rounded-3xl p-3">

                        <div className="flex justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            Cart
                        </div>
                    </button>
                </div>


            </div>
            <div className=' bg-[#f3f3f3] w-full relative'>
                {/* Menubar */}
                <div className="flex w-2/3 m-auto p-2 justify-center item-center pb-5 relative">
                    <ul className="flex gap-8 m-auto p-4 justify-around item-center rounded-full text-white font-medium bg-[#09225A]">
                        {
                            nav.map(({ navItem, path }) => {
                                return <Link key={path} href={path}><li className={`hover:bg-[#01AFF1] p-4 rounded-3xl py-2 ${activeLink === path ? 'bg-[#01AFF1]' : ''}`}>{navItem}</li></Link>
                            })
                        }

                    </ul>
                </div>

            </div>
        </>

    )
}

export default Navbar