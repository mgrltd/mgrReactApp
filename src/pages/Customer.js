// timer
import React, { useEffect, useState } from 'react'
import { Base_Url } from '../constants/BaseUrls';

const Customer = () => {
  const url=Base_Url;
  const[min,setmin]=useState(1);
  const[sec,setsec]=useState(60);
  var timer;
  useEffect(()=>{
    if(min===0&&sec===0)
    {
      alert("time out");
    }
    else{
    timer=setInterval(()=>{
      setsec(sec-1);
      if(sec===0)
      {
        setmin(min-1);
        setsec(60);
      }
    },1000)
    return ()=>clearInterval(timer);
  }
  });

  return (
    <div>
      <h1>timer</h1>
      <h1>{min}:{sec}</h1>
      
    </div>
  )
}

export default Customer