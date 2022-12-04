import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='p-10'>
        <h1 className='text-5xl font-extrabold text-blue-600 pb-5 '>Home Page</h1>

        <Link href={'/about'} className='font-bold'>to about --></Link>
      </div>
    </>
  )
}
