import React from 'react'

const NewsLetter = () => {
    return (
        <div className="bg-[#F3F3F3] ">
            <div className="w-2/3 m-auto p-14">
                <div className="bg-[#09225A] rounded-t-3xl">
                    <div className="flex p-10 justify-around items-center">
                        <div className="space-y-2">
                            <p className="font-bold text-xl text-[#01AFF1] ">SONNY’S SMARTSTOP</p>
                            <div className="">
                                <p>Receive exclusive content, offers and information to help you run your wash - better.</p>
                                <p>When you register at Sonny’s, you become part of our community!</p>
                            </div>
                        </div>
                        <div>
                            <button className="text-sm bg-[#01AFF1] text-white font-bold p-4 px-9 m-2 rounded-full uppercase">SIGN UP NOW</button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1B1B1B] rounded-b-3xl">
                    <div className="flex p-3 justify-around items-center">
                        <div>
                            <button className="text-sm bg-[#FFFFFF] text-[#01AFF1] font-bold p-4 px-9 m-2 rounded-full uppercase">SHOP SONNY’S</button>
                        </div>
                        <div className="flex justify-around items-center gap-3">
                            <p>Check Us Out On Our Socials</p>
                            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center" >
                                <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                            </div>
                            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center" >
                                <svg className="h-6 w-6 text-blue-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                            </div>
                            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center" >
                                <svg className="h-6 w-6 text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </div>
                            <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center" >
                                <svg className="h-6 w-6 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter