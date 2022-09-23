import React, { useState } from 'react'
import axios from 'axios';
import {useDispatch, useSelector } from 'react-redux';

import { Base_Url } from '../constants/BaseUrls';
import { increment } from '../redux/Constent';
const Home = () => {
  const url= Base_Url;

  const n=useSelector(state=>state)
  const dispatch = useDispatch();
 
const B=()=>{
  dispatch(increment());
  
}
  return (
    <div>
      <h1>hello {url}</h1>  
      <h1>redux</h1>
      <h1>count number:{n.counter}</h1>
    
    <input onClick={B} type="submit"  />
    {n.logged ?<h1>true</h1>:<h1>fals</h1>}
      
            
    </div>
  )
}

export default Home