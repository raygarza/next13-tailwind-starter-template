import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <div className='p-10'>
        <h1 className='text-5xl font-extrabold text-blue-600 pb-5'>About Page</h1>

        <Link href={'/'} className='my-10 font-bold'>to home --></Link>
      </div>
    </>
  )
}