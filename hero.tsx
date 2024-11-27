import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1'>
    <div className='ml-[10%] mt-16'>
      <Image src="/images/lap.png" alt="banner" width={300} height={300} className="rounded-full ml-[40%]"/>
      </div>
      <div>
    <h2 className='text-6xl text-left ml-[20%] gap-y-2 font-bold text-cyan-600 mt-16'>Hello, <br /> I am <br /> Iffat mumtaz</h2>
   <div className='ml-[20%] flex gap-14 mt-12'>
    <button className='text-xl p-3 border-2 border-cyan-600 rounded-xl hover:text-pink-600'><Link href="https://www.linkedin.com/in/iffat-mumtaz-b3480a2b5/">ABOUT ME</Link></button>
    <button className=' text-xl p-3 border-2 border-cyan-600 rounded-xl hover:text-pink-600'><Link href="/contact">CONTACT US</Link></button>
   </div>
    </div>
    </div>
  )
}

export default Hero
