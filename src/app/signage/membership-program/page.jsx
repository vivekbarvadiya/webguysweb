"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import product1Img from "../../../../public/heroofall/signage/products/product1.png";
import product2Img from "../../../../public/heroofall/signage/products/product2.png";
import product3Img from "../../../../public/heroofall/signage/products/product3.png";
import product4Img from "../../../../public/heroofall/signage/products/product4.png";
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'


const page = () => {

  const [option, setOption] = useState("");

  const handleChange = (e) => {
    setOption(e.target.value);
  }

  const imageData = [product1Img, product2Img, product3Img, product4Img]

  const tableData = [{ index: 1, desc: "dimension", spec: `36" W x 72" H x 4" D` },
  { index: 2, desc: "Illumination", spec: "LED" },
  { index: 3, desc: "Construction", spec: "Baked Enamel Aluminum body with a high impact plastic face or Aluminum Composite Face" },
  { index: 4, desc: "Voltage/AMP ", spec: "120VAC" },
  { index: 5, desc: "Mounting", spec: `Post w/ 12" ground clearance` }
  ]


  return (
    <>
      <Navbar />
      <div className="relative -my-10 -z-10 bg-white">

        <div className="w-2/3 p-10 text-black m-auto">
          {/* BreadCrumb */}
          <div className=" flex justify-start items-center gap-3 ml-5">
            <p>
              <Link href={"/"}>
                <svg className="h-6 w-6 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>
            </p>
            <p>
              <svg className="h-6 w-6 text-gray-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
            </p>

            <Link href={"/signage"}>
              <p> Signage </p>
            </Link>

            <p>
              <svg className="h-6 w-6 text-gray-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
            </p>

            <Link href={""}>
              <p> Membership-program </p>
            </Link>

          </div>

          {/* Main product details */}
          <div className="py-10 gap-10 grid grid-cols-2 grid-flow-col">
            <div className="image w-50%">
              <Image src={product1Img} alt='product1img' />
              <div className="flex gap-2 justify-center items-center p-2">
                {
                  imageData.map((img) => {
                    return <Image src={img} alt='img' className='w-32 h-32 rounded-xl' />
                  })
                }
              </div>
            </div>
            <div className="container w-50% space-y-4">
              <h1 className='text-3xl font-bold'>Membership Program Zone Package</h1>
              <p className='text-[#30ADE3] text-2xl font-bold'>$2395.00</p>
              <div>
                <ul className='list-disc ml-4'>
                  <li>Increase your monthly membership count by engaging customers <br /> before & after their wash.</li>
                </ul>
              </div>
              <div>
                <p className='italic'> <span className='font-bold normal'> MMS </span> Non-Illuminated set of Monthly Membership Signs </p>
                <p className='italic'> <span className='font-bold normal'> MMSI </span> Illuminated set of Monthly Membership Signs</p>
              </div>
              <div>
                <p className='font-bold normal pb-2'>*Specify Your Illumination</p>
                <select name="1" id="" value={option} onChange={handleChange} className='p-3 rounded-xl'>
                  <option value="" className=''>Select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div>
                <div className='flex justify-between mt-6'>
                  <p className='font-bold normal pb-2'>Input Any Additional Instructions</p>
                  <p className='font-bold mr-3'>$0.00</p>
                </div>
                <textarea name="" id="" className='w-full h-32 rounded-xl border border-gray-400 border-opacity-40'></textarea>
              </div>
              <p>Total Amount: <span className='text-[#30ADE3] text-2xl font-bold'>$2,395.00</span></p>
              <div className='flex justify-start gap-4 items-center py-10'>
                <div className="flex">
                  <button className="text-sm bg-[#E1E1E1] text-black font-bold p-2 w-10 h-10 rounded-l-lg">-</button>
                  <button className="text-sm bg-[#FFFFFF] text-black font-bold p-2 w-10 h-10 ">1</button>
                  <button className="text-sm bg-[#E1E1E1] text-black font-bold p-2 w-10 h-10 rounded-r-lg">+</button>
                </div>
                <button className="text-sm bg-[#01AFF1] text-white font-bold p-4 w-auto px-12 m-2 rounded-full uppercase">Add to Cart</button>
              </div>
            </div>
          </div>

          <hr className='h-0.5 bg-slate-500 opacity-25' />

          {/* Main Product description */}
          <div className='py-5'>
            <div className='p-2'>
              <div className='flex gap-3 mb-5'>
                <button className="text-sm bg-[#F3F3F3] text-black font-bold p-4 w-auto px-12 rounded-full uppercase">Description</button>
                <button className="text-sm bg-[#01AFF1] text-white font-bold p-4 w-auto px-12 rounded-full uppercase">Specifications</button>
              </div>
              <table className='border-spacing-x-12 border-separate'>
                <tbody>
                  {
                    tableData.map(({ desc, spec, index }) => {
                      return <tr key={index}>
                        <td className='font-bold p-1 mx-12'>{desc}</td>
                        <td className='p-1'>{spec}</td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>

          <hr className='h-0.5 bg-slate-500 opacity-25 mb-14' />

        </div>

      </div>

      <NewsLetter />
      <Footer />
    </>
  )
}

export default page