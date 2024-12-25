import Image from "next/image";
import image1 from "../../public/image.png"
import HeroImg from "../../public/Hero.png";
import Navbar from "@/components/Navbar";
import CarwasherImg from "../../public/specialize/Carwasher.jpg"
import GroupImg from "../../public/specialize/group.png"
import LightBoxImg from "../../public/specialize/lightbox.png"
import PriceTagImg from "../../public/specialize/pricetag.png"
import PromotionImg from "../../public/specialize/promotion.png"
import SettingsImg from "../../public/specialize/settings.png"
import innovation1Img from "../../public/innovation/innovation1.png";
import innovation2Img from "../../public/innovation/innovation2.png";
import innovation3Img from "../../public/innovation/innovation3.png";
import innovation4Img from "../../public/innovation/innovation4.png";
import Hero2Img from "../../public/Hero2.png";
import Footer from "@/components/Footer";
import SingleItem from "@/components/SingleItem";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  

  const data = [{ img: innovation1Img, name: "SONNY’S SMARTSTOP 1", itemId: "SD_SMARTSTOP 1", brand: "Sonny's 1" }, { img: innovation2Img, name: "SONNY’S SMARTSTOP 2", itemId: "SD_SMARTSTOP 2", brand: "Sonny's 2" }, { img: innovation3Img, name: "SONNY’S SMARTSTOP 3", itemId: "SD_SMARTSTOP 3", brand: "Sonny's 3" }, { img: innovation4Img, name: "SONNY’S SMARTSTOP 4", itemId: "SD_SMARTSTOP 4", brand: "Sonny's 4" }]

  const specialize = [
    { img: CarwasherImg, text: "Tunnel" },
    { img: GroupImg, text: "Vaccum" },
    { img: PriceTagImg, text: "Point of Sale" },
    { img: SettingsImg, text: "Controls" },
    { img: LightBoxImg, text: "Signage" },
    { img: PromotionImg, text: "Marketing" },
  ]

  return (
    <>
      <div>

        <Navbar />

        {/* Hero page */}
        <div className="">
          <Image src={HeroImg} alt="Hero image" className="bg-cover w-full" />
          <div className="w-full h-full bg-[#09225A] p-10 ">
            <h1 className="text-center text-4xl font-bold my-20">WE SPECIALIZE IN</h1>
            <div className="flex gap-5 justify-center mt-20 mb-20">
              {
                specialize.map(({ img, text }) => {
                  return <div className="flex flex-col justify-center items-center ">
                    <div className="text-center bg-white w-44 h-44 rounded-lg flex flex-col items-center justify-center">
                      <Image src={img} alt="car washer" />
                    </div>
                    <p className="text-white font-semibold pt-2 mt-2 text-lg">{text}</p>
                  </div>
                })
              }

            </div>
          </div>
          <div className="p-10 bg-[#F3F3F3] text-black">
            <div className="w-2/3 text-center m-auto">
              <h1 className="text-4xl mt-20 mb-5 font-bold">FEATURED PRODUCTS</h1>
              <div className="flex gap-10 p-5 justify-center">
                <div className="w-56 h-56 bg-gray-400 rounded-lg"></div>
                <div className="w-56 h-56 bg-gray-400 rounded-lg"></div>
                <div className="w-56 h-56 bg-gray-400 rounded-lg"></div>
                <div className="w-56 h-56 bg-gray-400 rounded-lg"></div>
              </div>
            </div>

            <div className="w-2/3 m-auto mb-20">
              <h1 className="text-4xl mt-20 mb-5 text-center font-bold">NEW CAR WASH INNOVATIONS</h1>
              <div className="flex gap-8 p-5 justify-center">
                {data.map((item, index) => { return <SingleItem key={index} img={item.img} name={item.name} itemId={item.itemId} brand={item.brand} /> })}
              </div>
            </div>
          </div>
          <Image src={Hero2Img} className="bg-cover w-full" alt="hero2" />
         <NewsLetter/>

          {/* footer */}
          
          <Footer />

        </div>



      </div>
    </>

  );
}
