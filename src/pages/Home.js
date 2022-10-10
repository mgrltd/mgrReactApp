import React, { useState } from 'react'

const Home = () => {
  const [isChecked, setIsChecked] =useState([{id:1,name:"ram",status:false},{id:2,name:"r",status:false},{id:3,name:"rk",status:false}]);
  const[roles,setRoles]=useState([]);

const roleslist=(event,value)=>{
   //console.log(event.target.checked)
    let updateObj = isChecked.map(row=>{
      console.log(row.status)

if(row.status)
{
  console.log(row.name);

}
      if(value.id ===row.id)
      {
      return {...row,status:event.target.checked}
       } //or return{...row,status:true}}
      else
      {
        return {...row,status:row.status}
      }

    })
    console.log("---")
    setIsChecked(updateObj)

}
  return (
    <div>
      <h1>Home </h1>
      {isChecked.map(each=>(<> <input type={'checkbox'} checked ={each.status} onChange={(e)=>roleslist(e,each)} /> {each.name} <br /></>))}
       </div>
  )
}

export default Home;