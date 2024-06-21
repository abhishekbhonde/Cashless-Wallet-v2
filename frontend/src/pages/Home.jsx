import React from 'react'
import { HomeAppBar } from '../components/HomeAppBar'
export const Home = () => {
  return (
    <div >
      <HomeAppBar />
      <div className='h-screen   bg-slate-900 '>
                <div className='flex gap-[100px]  justify-center items-center'>
                <div className='mt-[200px]'>
                <h2 className='text-5xl font-bold text-white'>
                India's Most-loved <br /> Payments App
                </h2>
                <p className='text-lg text-white mt-[50px]'>
                Send money to your friend through <br /> secure enviroment, and see all trasctions <br /> more.
                </p>
            </div>
            <div className='w-[600px] mt-[100px]'>
                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1715933362922.png" alt="" />
            </div>
                </div>
      </div>
    </div>
  )
}

