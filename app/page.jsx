import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='p-5'>
        <h1 className='text-3xl text-blue-500 mb-10'>Home Page</h1>

        <Link href={'/about'}>to about</Link>
      </div>
    </>
  )
}
