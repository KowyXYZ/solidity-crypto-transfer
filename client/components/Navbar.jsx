import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#0B0B0F] w-full py-3'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className=' justify-center items-center text-[24px] flex bg-[#F7931A] rounded-md'>
          <h1 className='shadow-[0_4px_14px_0_rgb(255,166,0,39%)] text-[#242424] px-2 uppercase font-black  tracking-widest'>BalkanDucat</h1>
        </div>

        <div className='flex gap-9 font-black uppercase text-[18px] justify-center items-center'>
          <Link href='/'>Services</Link>
          <Link href='/'>Transactions</Link>
          <Link className='shadow-[0_4px_14px_0_rgb(255,166,0,39%)] hover:shadow-[0_6px_20px_rgba(255,166,0,23%)] hover:bg-[rgba(255,166,0,0.9)] px-8 py-2 bg-[#F7931A] rounded-md text-white font-light transition duration-200 ease-linear' href='/'>Login</Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar