import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
        <div className='w-[95%] lg:w-5/6 m-auto'>
          <div className=' py-10'>
              <h1 className='text-3xl font-extrabold text-[#38BDF8] '>About Page</h1>
              <p className='pb-10 font-semibold'>Click the button below to go to the Home page.</p>            
            <div>
              <Link href={'/'} className='font-bold p-4 bg-white bg-opacity-5 hover:bg-opacity-[.07] duraration-200 rounded-lg border-white border border-opacity-20'>To Home --></Link>
            </div>
          </div>
        </div>
    </>
  )
}