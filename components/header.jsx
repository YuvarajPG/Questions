import GreyBtn from './buttons/greyBtn'
import BlueBtn from './buttons/greenBtn'
import Link from 'next/link'
import '../styles/header.css'

const Navbar = () => {
  return (
    <>
      <nav className='bg-[#364F6B]'>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', minHeight: '25px', verticalAlign: 'center',height: '60px', alignItems: 'center'}} className='mx-5 px-5 min-w-[320px]:gridTemplateRows-2 gap-4'>

          <span className='ml-2 font-semibold text-2xl text-white min-w-[560px]:text-center'>
            <Link href={'/'}>
              MY WEBSITE
            </Link>
          </span>

          <ul className='grid grid-flow-col gap-7'>
            <li>
              <Link href={'/'}>
                HOME
              </Link>
            </li>

            <li>
              <Link href={'/about'}>
                ABOUT
              </Link>
            </li>

            <li>
              <Link href={'/'}>
                TECH
              </Link>
            </li>

            <Link href={'/login'}>
              <GreyBtn input={'Login'} />
            </Link>
          </ul>
        </div>
      </ nav>
    </>
  )
}

export default Navbar