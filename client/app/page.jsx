"use client"

import Image from 'next/image'
import React, { useContext } from 'react'

import { TransactionContext } from '@context/TransactionContext'

const Home = () => {

  const {connectWallet, connectedAccount, formData, setFormData, handleChange, sendTransaction } = useContext(TransactionContext)

  const handleSubmit = (e) => {
    const {addressTo, amount, keyword, message} = formData

    e.preventDefault()

    if(!addressTo || !amount || !keyword || !message) {
      console.log('TYPO')
    };

    sendTransaction()
  }


  return (
    <div>
        <div className='h-screen  bg-hero-pattern bg-cover bg-center bg-no-repeat '>
         <div className='container mx-auto flex text-center justify-between items-center py-24'>
          <div className='flex justify-center  items-center flex-col gap-3 p-8  bg-[#121212] border-2 rounded-2xl'>
              <h1 className='text-[56px]  text-[#fff] font-black uppercase'>Send crypto <br />Across The World</h1>
              <h1 className='text-[24px] opacity-70'>Explore the crypto world. Buy and sell cryptocurrency on BalkanDucat</h1>
              {!connectedAccount && (<button onClick={connectWallet} className='shadow-[0_4px_14px_0_rgb(255,166,0,39%)] hover:shadow-[0_6px_20px_rgba(255,166,0,23%)] uppercase !font-black text-[18px] hover:bg-[rgba(255,166,0,0.9)] px-8 py-2 bg-[#F7931A] rounded-md text-white  transition duration-200 ease-linear'>Connect Wallet</button>)}
            </div>


            <div className=' flex justify-center items-center flex-col'>
              <Image src='/assets/eth.png' width={600} className='object-contain rounded-3xl' height={600}/>
              <div  className='w-full bg-[#121212] justify-center items-center flex flex-col pt-6 gap-4 border-2 rounded-2xl mt-4 p-4'>
                <div className='flex items-center justify-center'>
                 <input handleChange={handleChange} className='p-2 rounded-2xl w-[450px]' type="text" placeholder='Address To' />
                </div>

                <div className='flex items-center justify-center'>
                 <input handleChange={handleChange} className='p-2 rounded-2xl w-[450px]' type="text" placeholder='Amount (ETH)' />
                </div>

                <div className='flex items-center justify-center'>
                 <input handleChange={handleChange} className='p-2 rounded-2xl w-[450px]' type="text" placeholder='Keyword' />
                </div>

                <div className='flex items-center justify-center'>
                 <input handleChange={handleChange} className='p-2 rounded-2xl w-[450px]' type="text" placeholder='Message' />
                </div>
                <div className='h-[2px] bg-[#fff] w-[80%] rounded-2xl'/>
                <button onClick={handleSubmit}  className='shadow-[0_4px_14px_0_rgb(255,166,0,39%)] hover:shadow-[0_6px_20px_rgba(255,166,0,23%)] uppercase !font-black text-[18px] hover:bg-[rgba(255,166,0,0.9)] px-8 py-2 bg-[#F7931A] rounded-md text-white  transition duration-200 ease-linear'>
                  Send Now
                </button>
              </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Home