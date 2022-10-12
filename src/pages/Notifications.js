import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Base_Url } from '../constants/BaseUrls';

const Notifications = () => {
  const[notifications,setNotifications]=useState([]);
  const[deletNotifications,setDeletNotifications]=useState([]);
  const[checkBoxStatus,setcheckBoxStatus]=useState([{}]);

  useEffect(() => {
     axios.get(`http://localhost:8008/alluserNotifications/2`)
      .then(
        (result) => {
          console.log(result.data);
          result.data.map(a=>{setcheckBoxStatus(c=>[...c,{id:a.notificationId,statues:false}])});
          setNotifications(result.data);
        },
        (error) => {
          alert(error)
         }
       ) 
   },[]);
const CreateNotification=()=>{
  console.log(checkBoxStatus)
  alert("CreateNotification")
}
const seletNotificationids=(value)=>{
  console.log("notification value-"+value)
  setDeletNotifications(current=>[...current,value])
}
const deletHandlear=()=>{
  alert("delet notifications -"+deletNotifications)
}

  return (
    
    <div style={{"paddingLeft":"30%"}}>
    <div style={{ "width":"50%","height":"780px","border": "2px solid red","border-radius":"50px","backgroundColor":"white"}}>
        <div>
         <h1 style={{"textAlign":"center"}}> All Notifications</h1>
         <a onClick={CreateNotification} style={{"float": "right","color":"green"}} >CreateNotification</a><br />
         </div>
         <hr />
         <div style={{"padding":"10px","max-height": "600px", "overflow-y":"scroll"}}>
         {notifications.map(notification=>
          <div  key = {notification.notificationId} >
          <div style={{"padding":10,"marginTop":"10px",  "border": "2px solid green",  "border-radius": "15px 50px 30px"}} >
          {/* <a > {notification.userid}</a> */}
          <input type="checkBox"  value={notification.notificationId} onChange={(e)=>{seletNotificationids(e.target.value)}} style={{"width": "25px", "height": "25px"}}/> 
          <a> <img style={{"border-radius":"50%"}} src={`${Base_Url}/photo/${notification.photoId}`} width={40} height={40}/>  </a>
          <a > {notification.userName}</a> 
          <a style={{"float": "right"}} > {notification.date}</a> 
          <h1  style={{"textAlign":"center"}}> {notification.notificationMessage}</h1> 
          </div>
          </div>
           )
          }
    </div>
    {deletNotifications.length>0?
    <div style={{"textAlign":"center"}}>
    <button style={{"backgroundColor":"blue","padding":"10px"}}>Selet All</button>
    <button onClick={deletHandlear} style={{"backgroundColor":"red","marginLeft":"40%","padding":"10px"}}>Delete</button>
    </div>
      :<></>}
    </div>
    </div>
  )
}

export default Notifications