import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';

import Userdetails from './Userdetails';
const Customer = () => {
  const [users, setUsers] = useState([]);
  const [pageNo, setpagNno] = useState(0);
  const [pageSize, setpageSize] = useState(5);
  const [sortbyfild, setsortbyfild] = useState("id");
  const [searchword, setsearchword] = useState("");
 const[deletuser,setdeletuser]=useState(true);
 const[filterroles,setfilterroles]=useState([])
 const[dropdownstate,setdropdownstate]=useState(false)

  useEffect(() => {
    axios.post(`http://localhost:8080/getallusers`,{pageNo,pageSize,sortbyfild,searchword,filterroles})
      .then(
        (result) => {
          setUsers(result.data);
        },
        (error) => {
          alert(error)
        }
      ) 
  }, [pageNo,pageSize,sortbyfild,searchword,deletuser,filterroles])


  const deletfunction = (value) =>{
    axios.delete(`http://localhost:8080/deletuserbyid/${value}`)
    .then(data =>   alert(data.data),setdeletuser(!deletuser))
    .catch(error =>  alert(error));
    this.setState((prev)=>{
        console.log(prev);
        return ({bool: !this.state.bool})
    })
};

const pagesize = (event) => {
  setpageSize(event.target.value)
}
const sortby = (event) => {
  setsortbyfild(event.target.value)
}
const search = (event) => {
  setsearchword(event.target.value)
}
const roleslist=(event)=>{
 
  if(event.target.checked==true)
  {
    setfilterroles(current=>[...current,event.target.value])  }
  else{
    setfilterroles(filterroles.filter((each)=>each!==event.target.value))
  }
}

  return (
    <div>

       <h1> page size :  <select value={pageSize} onChange={pagesize}>
        <option value={1}>1</option>
        <option value={2} >2</option>
        <option value={3} >3</option>
        <option value={4}>4</option>
        <option value={5} >5</option>
        <option value={6} >6</option>
        <option value={7}>7</option>
        <option value={8} >8</option>
        <option value={9} >9</option>
        <option value={10} >10</option>
      </select> </h1>

      <div className='addb'> 
Search <input type="text" placeholder='type word' onChangeCapture={search} /> {  }
</div><br /><br />


<div className='addb'>
    filterBy <button onClick={()=>{setdropdownstate(prevdropdownstate=>!prevdropdownstate)}}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYWKYdgpVV75BiSqO73Ry-y7hpXx2UC5PdmjWUsRpvVeMHF4Zl_kBFE1lBiyuQXvQMpQ&usqp=CAU" width="20px" height="20px" /></button>
    {dropdownstate==true && 
    <div>
      seletroles <br></br>
      <label><input type="checkbox" value={"USER"} onClick={roleslist}/>USER</label><br />
    <label><input type="checkbox" value={"ADMIN"} onClick={roleslist}/>ADMIN</label><br />
      <label><input type="checkbox" value={"EMP"} onClick={roleslist}/>EMP</label><br />
      <label><input type="checkbox" value={"STU"} onClick={roleslist}/>STU</label><br />
      <label><input type="checkbox" value={"FATHER"} onClick={roleslist}/>FATHER</label><br />
      </div>}
</div>


<div className='addb'> sortBy:  <select value={sortbyfild} onChange={sortby}>
      <option value="id">id</option>
        <option value="userName">userName</option>
        <option value="emailId" >emailId</option>
        <option value="phoneNumber" >phoneNumber</option>
        <option value="role">role</option>
      </select> </div> 
     


      <center>
<h1 className = "text-center"> Users List size {users.length}</h1>
<p>{filterroles}</p>
<table className = "table">
<thead className='thead'>
<tr className='tr'>
<td className='td'> Ids</td>
<td className='td'> userName</td>
<td className='td'> emailId</td>
<td className='td'> phoneNumber</td>
<td className='td'> role</td>
<td className='td'> action</td>
</tr>
</thead>
<tbody>
{
users.map(
user => 
<tr className='tr' key = {user.id}>
<td className='td'> {user.id}</td> 
<td className='td'> {user.userName}</td> 
<td className='td'> {user.emailId}</td> 
<td className='td'> {user.phoneNumber}</td> 
<td className='td'> {user.role}</td>
<td>
<Popup trigger={<button className='editb'  >View</button>}modal> <Userdetails id={`${user.id}`} /></Popup>
   <button className='deletb' onClick={()=>deletfunction(`${user.id}`)}>Delet</button>
</td>
</tr>
)
}
</tbody>
</table>
</center>
<div className='addb'>

<h1>page no :
  { pageNo>0 &&
 <button className='saveb'  onClick={()=>{setpagNno(pageNo-1)}} >back </button>
  }
{pageNo +1}  
{ users.length==pageSize &&
<button className='saveb'  onClick={()=>{setpagNno(pageNo+1)}} > next </button>
}</h1>

</div>

    </div>
  )
}

export default Customer