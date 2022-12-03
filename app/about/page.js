import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <div className='p-5'>
        <h1 className='text-3xl text-blue-500 mb-10'>About Page</h1>

        <Link href={'/'} className='my-10'>to home</Link>
      </div>
    </>
  )
}