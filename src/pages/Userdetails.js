import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Userdetails = (props) => {

    const[details,setdetails]=useState({
        id :0,
        userName :"NA",
        emailId :"NA",
        phoneNumber :"NA",
        role :"NA",
        districtName :"NA",
        stateName :"NA",
        counryName :"NA",
        cropName :"NA",
        categoryName :"NA"

    })   

  useEffect(() => {
    axios.get(`http://localhost:8080/getuserbyid/${props.id}`)
      .then(
        (result) => {
          setdetails(result.data);
        },
        (error) => {
          alert(error)
        }
      ) 
  }, [])
  return (
    <div style={{"backgroundColor":"plum","padding":"20px"}} >
        <form >
      <center >
      <h1>  User Profil details </h1>
    <label style={{"color":"red","padding":"10px"}}>   profil : </label>  <img src={`${details.cropName}`} width="100px" height="100px"/><br /><br />
    <label style={{"color":"red","padding":"10px"}}>  User  Id:</label>     {details.id} <br /><br />
    <label style={{"color":"red","padding":"10px"}}>    User Name: </label>  {details.userName}<br /><br />
    <label style={{"color":"red","padding":"10px"}}>   E-Mail id: </label>  {details.emailId}<br /><br />
    <label style={{"color":"red","padding":"10px"}}>   PhoneNumber:</label>  {details.phoneNumber}<br /><br />
    <label style={{"color":"red","padding":"10px"}}>   ROLE: </label> {details.role}<br /><br />
    <label style={{"color":"red","padding":"10px"}}>    DistrictName </label> {details.districtName}<br /><br />
    <label style={{"color":"red","padding":"10px"}}>   StateName </label> {details.stateName}<br /><br />
    <label style={{"color":"red","padding":"10px"}}>   CounryName </label> {details.counryName}<br /><br />
    <label style={{"color":"red","padding":"10px"}}>   CategoryName </label> {details.categoryName}<br /><br />
        </center>
        <button className='addb' style={{"padding":"10px"}} >ok</button>
        </form>
        <h1></h1>
    </div>
  )
}

export default Userdetails