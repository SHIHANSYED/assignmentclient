import React, { useEffect, useState } from 'react'
import './animediv.css'
import axios from 'axios'


export const Details = () => {

  
  const [data , setData]= useState([]);
 
  useEffect(()=>{
    axios.get(`https://spbackend-production.up.railway.app/studentinfo`).then((data)=>{
      
      setData(data.data)
    })
  },[])  
    
  

  const sortByName=()=>{
    axios.get(`https://spbackend-production.up.railway.app/studentinfo/name`).then((data)=>{
      console.log(data.data)
      setData(data.data)
    })}

    const filterByDivision=(e)=>{
      axios.get(`https://spbackend-production.up.railway.app/studentinfo/${e}`).then((data)=>{
      console.log(data.data)
      setData(data.data)
    })}

  return (
 
 <>
  <div className='flex'> 
   <div><h1 className='text-2xl text-white font-semibold shadow-sm'>Students Details</h1></div> 
    <div className='flex  '>
    
    <div className='text-black bg-yellow-500 p-1 px-2 w-22 rounded ml-7'>
    <form onChange={(e)=>filterByDivision(e.target.value)}>
      <select className='bg-yellow-500'>
      <option>Division</option>
      <option value="A"> A</option>
      <option value="B"> B</option>
      <option value="C"> C</option>
      </select>
    </form>
    </div>

 <div><button className='text-black bg-yellow-500 p-1 px-2 w-20 rounded ml-2 ' onClick={sortByName}>Sort ↕ </button></div> 
 </div>
 </div>
{ data.map((item , k)=> <div className='bounce-in-top w-full p-5 mb-1 rounded-md bg-white  grid grid-cols-14 border-4 border-indigo-500/100  '>
  <h1 className='font-semibold col-start-1 '>Roll No : {item.id}</h1>
  <h1 className='font-semibold  col-start-2 col-end-5'>Name : {item.name} </h1>
  <h1 className='font-semibold col-start-5 col-end-9'>DOB : {item.dob}</h1>
  <h1 className='font-semibold col-start-9 col-end-10 '>Class :{item.className}</h1>
  <h1 className='font-semibold col-start-10 col-end-12 '>Div :{item.division}</h1>
  <h1 className='font-semibold col-start-12 col-end-14'>Gender:{item.gender}</h1>
  
  </div>) }
</>

  )
}
