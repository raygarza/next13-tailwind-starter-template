import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <div className='p-10 w-screen'>
        <h1 className='text-5xl font-extrabold text-[#38BDF8] pb-3'>About Page</h1>
        <p className='pb-10 font-semibold'>Click the button below to go to the Home page.</p>

        <Link href={'/'} className=' font-bold p-4 bg-white bg-opacity-5 hover:bg-opacity-[.07] duraration-200 rounded-lg' >To Home --></Link>
      </div>
    </>
  )
}