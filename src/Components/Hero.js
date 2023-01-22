import React from 'react'
import { Details} from './animediv.js'
import { Form } from './Form'


export const Hero = () => {
  return (
    <div className='h-screen flex bg-gradient-to-r from-green-500  to-blue-500  '>
        <div className=' ml-10 pt-4 w-1/4'>
           <Form/> 
        </div>
        
        <div className='w-3/4 ml-60 mr-10 mt-10'>
          <Details/>
        </div>
    
    </div>
  )
}
