import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Register = () => {
  const[countrys,setcountry]=useState([])
  const[states,setstates]=useState([])
  const[districts,setdistrict]=useState([])

  const [userdata,senduserdata]=useState({
    name:"",
    ponenumber:"",
    password:"",
    confoumpassword:"",
    email:"",
    otp:"",
    verifyotp:"",

  })


  useEffect((e) => {
    axios.get(`http://localhost:8080/allcountrys`)
      .then(
        (result) => {
          setcountry(result.data);
        },
        (error) => {
          alert(error)
        }
      ) 
  },[])

  const getstates=(value) => {
    axios.get(`http://localhost:8080/allstate/${value}`)
      .then(
        (result) => {
          setstates(result.data);
        },
        (error) => {
          alert(error)
        }
      ) 
  }
  const getdistrict=(value) => {
    axios.get(`http://localhost:8080/alldistrict/${value}`)
      .then(
        (result) => {
          setdistrict(result.data);
        },
        (error) => {
          alert(error)
        }
      ) 
  }
const submitHandler=(e)=>{
  e.preventDefault();
 

}


  return (
    <div style={{"padding":"10px"}}>
    <h1>Register Employees</h1>

        <div  style={{"padding":"20px"}}>
       selet country
        <select  onClick={(e)=>{getstates(e.target.value)}}>
          <option value="">--selet Country--</option>
        {
          countrys.map(
        country => 
          <option value={country.id} key = {country.id}>{country.counryName}</option>
                      )
        }
        </select>
        
  selet state
          <select onClick={(e)=>{getdistrict(e.target.value)}}>
          <option value="">--selet state--</option>
          {
          states.map(
            state => 
          <option value={state.id}  key = {state.id}>{state.stateName}</option>
        )
          }
        </select>
    selet district
    <select>
      <option value="">--selet district--</option>
    {
      districts.map(
        district => 
       <option value={district.id} key = {district.id}>{district.districtName}</option>
                  )
    }
     </select>
    </div>
    <center>
    <div>
      <form onSubmit={submitHandler}>
      Profil:<input type="file" style={{"height":"150px","width":"200px","border":"1px solid red","backgroundColor":"gold","backgroundImage":"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPvlLktdtH02TYgK8iz_AHGyDeYfebKsipA&usqp=CAU')"}} /><br /><br />
   
      User Name:
        <input type="text"  onChange={(e)=>{senduserdata({name:e.target.value})}} /> <br /><br />
        PhoneNumber:
        <input type="text"  onChange={(e)=>{senduserdata({ponenumber:e.target.value})}}/><br /><br />
        Password:
         <input type="password"  onChange={(e)=>{senduserdata({password:e.target.value})}}/><br /><br />
        ConfoumPassword: 
          <input type="password" /><br /><br />
        E-MailId
        <input type="text"  onChange={(e)=>{senduserdata({email:e.target.value})}}/> {}<button style={{"backgroundColor":"greenyellow"}} >send OTP</button><br /><br />
       Enter OTP 
       <input type="text"  /> <button >Verify</button><br /><br />
       <input type="submit" value="Submit" /> <br /><br />
        

     </form>
    </div>
    </center>

    </div>
  )
}

export default Register