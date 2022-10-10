import React from 'react'
import { AiFillAppstore,AiFillHome,AiFillPhone,AiFillSignal,AiOutlineTrophy } from 'react-icons/ai';

const BodyLeft = () => {

 
  return (
    <div>  
        <div className='main'>
            
        <a href="/" >
        <a style={{"fontSize":50}}><AiFillHome /></a>
            <br />
             Home 
         </a>
        <br /> <br />        
         <a href="/services" >
            <a style={{"fontSize":50}}><AiFillAppstore /></a>
            <br />
             Services 
         </a>
         <br /> <br />
       {/*  <a href="/customer" >
         <a style={{"fontSize":50}}><AiFillPhone /></a>
            <br />
             Customer 
             
         </a>
         <br /> <br />
          <a href="/pagenashan" >
         <a style={{"fontSize":50}}><AiFillHome /></a>
            <br />
            pagenashan
             
         </a> 
         <br /> <br />*/}
         <a href="/chsrts" >
         <a style={{"fontSize":50}}><AiFillSignal /></a>
            <br />
             Reports
         </a>
         <br /><br />
         <a href="/game" >
         <a style={{"fontSize":50}}><AiOutlineTrophy /></a>
            <br />
             Game
         </a>

         
       
        
      </div>

    </div>
  )
}

export default BodyLeft