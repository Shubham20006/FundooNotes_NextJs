import Image from 'next/image'
import Signup from './signup'
import Signin from './signin'
import Header from '@/components/Header'
import Dashboard from './dashboard'

export default function Home() {
  return (
    <div className=' h-[140vh] bg-white'>
      {/* <Signup/> */}
      <Dashboard/>
      {/* <Signin /> */}
    </div>
  )
}
