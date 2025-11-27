import "../styles/SVG.css";
import BlueBtn from '../components/buttons/greenBtn'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div className=' flex flex-col justify-center items-center bg-linear-to-b from-[#004E92] to-[#001452] gap-6 min-[320px]:min-h-[90vh] min-w-[320px]:min-h-[100vh]'>
        <p className=' text-6xl text-white'>welcome</p>
        <p className=' text-2xl text-white'>To my website</p>
        <div className=' items-center'>
          <Link href={'/login'}>
            <BlueBtn input={'Login'} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home