import React from 'react'
import logo from '../images/logo.jpg'


export const Header = () => {
  return (
    <div className='flex justify-around bg-white'>

      <div className='w-20 mt-2 '><img src={logo} alt="logo"/> </div> 
      
       <div className='mt-7  '> <p className=' text-4xl font-mono tracking-tighter font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-blue-800 to-green-500 '>SHIHAN'S CLASSROOM </p></div>

       <div className='  mt-8 ml-20 '>
        <button className='h-7 bg-blue-500 font-mono  font-semibold text-white px-2  mr-3 rounded '>Home</button>
        <button className='h-7  bg-blue-500  font-mono  font-semibold text-white px-2  mr-3  rounded'>Results</button>
        <button className='h-7  bg-blue-500  font-mono  font-semibold text-white px-2 mr-3 rounded '>Announcements</button>
        <button  className='h-7  rounded-md bg-blue-500   font-mono  font-semibold text-white px-2   '>Exams</button>
       </div>
       

    </div> 

  )
}
