import Image from "next/image";
import React from "react";



const Footer = () => (
  <div className=" flex md:justify-center justify-center text-center items-center flex-col p-4 ">
    <div className=" flex gap-12 sm:flex-row flex-col justify-center text-center items-center my-4">
        <div className=' justify-center items-center text-[24px] flex bg-[#F7931A] rounded-md'>
          <h1 className='shadow-[0_4px_14px_0_rgb(255,166,0,39%)] text-[#242424] px-2 uppercase font-black  tracking-widest'>BalkanDucat</h1>
        </div>
      <div className="flex font-black text-[24px]  items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white  text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white  text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white  text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white  text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@kowyxyz.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@Kowy</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;