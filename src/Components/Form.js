import React, { useState } from 'react'
import axios from "axios";



export const Form = () => {

  const [username , setUsername] =useState('');
  const [dob , setDob] = useState('');
  const [division , setDivision] = useState('');
  const [userclass , setUserclass] = useState('');
  const [gender , setGender] = useState('');

  const [nameval,setNameval]=useState(false)
  const [dobval,setDobval]=useState(false)
  const [classval,setClassval]=useState(false)
  const [divisionval,setDivisionval]=useState(false)
  const [genderval,setGenderval]=useState(false)

  


const addStudent=(e)=>{
  e.preventDefault()
  if (username==="") {
    setNameval(true)
  }
  if(dob===""){
    setDobval(true)
  }
  if(userclass===""){
    setClassval(true)
  }
  if(division===""){
    setDivisionval(true)
  } 
  if(gender===""){
    setGenderval(true)
  }
  else{
    axios.post(`https://spbackend-production.up.railway.app/studentinfo`, {
        name: username,
        dob: dob,
        className: userclass,
        division: division,
        gender: gender
      })
      .then((res)=> {
        console.log(res)
        window.location.reload()
      })
      .catch(function (error) {
        alert(error);
      });
    
  }
}


  return (
       <form onSubmit={addStudent}>
    <div className='grid '>
    
     <label className='text-white '>Enter Your Name</label>
      <input type="text" name='username' value={username} onChange={(e)=>{
      const { value } = e.target;
      const re = /^[A-Za-z ]+$/;
      if (value === "" || re.test(value)) {
      setUsername(e.target.value)
      setNameval(false)}}} 
      className=" px-4 py-2 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Special Characters Not Allowed"/>
      {nameval?<div className='bg-red-100 border border-red-400 text-red-700  rounded relative'>Username Can Not Be Empty</div>:<div></div>}

      <label className='text-white '>Enter Your Date Of Birth</label>
      <input name='dob' value={dob} onChange={(e)=>{setDob(e.target.value)
      setDobval(false)}} className="focus:shadow-soft-primary-outline    text-base leading-5.6 ease-soft block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal focus:text-gray-700 outline-none transition-all   focus:border-blue-600 focus:outline-none" type="date" placeholder="Please select a date" />
      {dobval?<div className='bg-red-100 border border-red-400 text-red-700  rounded relative' >DOB Can Not Be Empty</div>:<div></div>}

      <label  className='text-white '>Select Your Class</label>
      <select name='userclass' required onChange={(e)=>{setUserclass(e.target.value)
      setClassval(false)}} id="class" className="px-4 py-2 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
      <option >Select Your Class</option>
      <option value="I">I</option>
      <option value="II">II</option>
      <option value="III">III</option>
      <option value="IV">IV</option>
      <option value="V">V</option>
      <option value="VI">VI</option>
      <option value="VII">VII</option>
      <option value="VIII">VIII</option>
      <option value="IX">IX</option>
      <option value="X">X</option>
      <option value="XI">XI</option>
      <option value="XII">XII</option>
     </select>
     {classval?<div className='bg-red-100 border border-red-400 text-red-700  rounded relative'>Class Can Not Be Empty</div>:<div></div>}

      <label className='text-white '>Select Your Division</label>
      <select  name='division' required onChange={(e)=>{setDivision(e.target.value) 
        setDivisionval(false)  }} id="division" className="px-4 py-2 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
      <option selected>Select Your Division</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      </select>
      {divisionval?<div className='bg-red-100 border border-red-400 text-red-700  rounded relative' >Select Your Division</div>:<div></div>}

      <label className='text-white '>Select Your Gender</label>
      <div className='flex justify-around text-gray-700 px-4 py-2 rounded bg-white'>Male <input type="radio" name="gender" value='M' onChange={(e)=>{setGender(e.target.value)
      setGenderval(false)}}  />  Female <input  type="radio" name="gender" value='F' onChange={(e)=>{setGender(e.target.value)
        setGenderval(false)}} /></div>
      {genderval?<div className='bg-red-100 border border-red-400 text-red-700  rounded relative' >Select Your Gender</div>:<div></div>}

     <button type='submit' className='text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 mt-3 rounded '>Submit</button>
       </div>
    </form>
    


  )
}
