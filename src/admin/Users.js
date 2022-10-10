import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';

import { AiFillEye,AiFillDelete,AiFillFastForward ,AiFillFastBackward,AiTwotoneFilter} from "react-icons/ai";
import { Base_Url } from '../constants/BaseUrls';

const Users = () => {
  const[seletroles,setseletroles]=useState([{name:"USER",status:false},{name:"ADMIN",status:false},{name:"EMP",status:false},{name:"COSTMAR",status:false}])
  const [users, setUsers] = useState([]);
  const[pageNo,setPageNo]=useState(1);
  const [sortbyfild, setsortbyfild] = useState("id");
  const [searchword, setsearchword] = useState("");
  const [pageSize, setpageSize] = useState(5);
  const[filterroles,setfilterroles]=useState([])
 
  const pagesize = (event) => {
    setpageSize(event.target.value)
  }
  const nextPageHandlear=()=>{
    setPageNo(pageNo+1);
  }
  const backPageHandlear=()=>{
    if(pageNo>1)
    setPageNo(pageNo-1);
  }
  const sortby = (event) => {
    setsortbyfild(event.target.value)
  }
  const search = (event) => {
    setsearchword(event.target.value)
  }

  const roleslist=(e,eachrole)=>{
      let updateObj = seletroles.map(row=>{
        if(eachrole.name===row.name)
        {
        return {...row,status:e.target.checked}
         } 
        else
        {
          return {...row,status:row.status}
        }})
        setseletroles(updateObj);
           if(e.target.checked==true)
    {
      setfilterroles(current=>[...current,e.target.value]) 
    }
    else{
     setfilterroles(filterroles.filter((each)=>each!==e.target.value))
    }
  }

  useEffect(() => {
    console.log({"pageSize":pageSize,"pageNo":pageNo,"sortbyfild":sortbyfild,"searchword":searchword,"filterroles":filterroles})
  axios.post(`http://localhost:8008/getallusers`,{pageNo,pageSize,sortbyfild,searchword,filterroles})
      .then(
        (result) => {
          setUsers(result.data);
        },
        (error) => {
          alert(error)
         }
       ) 
   }, [pageNo,pageSize,sortbyfild,searchword,filterroles])
  
  const deletfunction = (value) =>{
    // axios
    // .get(`http://localhost:8080/deletlanguagebyid/${value}`)
    // .then(data =>   alert(data.data))
    // .catch(error =>  alert(error));
    // this.setState((prev)=>{
    //     console.log(prev);
    //     return ({bool: !this.state.bool})
    // })
};

  return (
    <div>
            <h1 className = "text-center">All Users</h1>
<div style={{"backgroundColor":"white","width":"100%","height":"650px"}}>
    <div style={{"fontSize":"25px","textAlign":"center"}}>

        <span > page size :  <select value={pageSize} onChange={pagesize} style={{"fontSize":"20px"}}>
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
            </select>
        </span>
        <span style={{"paddingLeft":"70px"}} > 
            Search <input type="text" placeholder='type word' onChangeCapture={search}  style={{"fontSize":"20px"}}/> 
        </span>
          <span style={{"paddingLeft":"100px"}}> 
        sortBy: <select value={sortbyfild} onChange={sortby} style={{"fontSize":"20px"}}>
              <option value="id">userId</option>
              <option value="userName">userName</option>
              <option value="phoneNumber" >phoneNumber</option>
              <option value="emailId" >emailId</option>
            </select> 
          </span> 
              <span style={{"paddingLeft":"70px"}}>
              filterBy <Popup trigger={<button><AiTwotoneFilter size={25} /></button>} >
              <div style={{"backgroundColor":"BurlyWood","padding":"10px"}}>
                  seletroles <br></br>
                  {seletroles.map(eachrole=>(<><input type="checkbox" checked ={eachrole.status} value={eachrole.name} onClick={(e)=>{roleslist(e,eachrole)}}/>{eachrole.name}<br/></>))}
                  </div>
              </Popup>
              </span>

    </div>
    <hr />
            <center>
            <table className = "table">
            <thead className='thead'>
            <tr className='tr'>
            <td className='td'> userId</td>
            <td className='td'> photo</td>
            <td className='td'> userName</td>
            <td className='td'> phoneNumber</td>
            <td className='td'> emailId</td>
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
            <td className='td'> <img src={`${Base_Url}/photo/${user.photo}`} width={50} height={60}/></td>
            <td className='td'> {user.userName}</td> 
            <td className='td'> {user.phoneNumber}</td>
            <td className='td'> {user.emailId}</td> 
            <td className='td'> {user.role}</td> 
            <td>
              <Popup trigger={<a ><AiFillEye size={40} color={"#ADFF2F"}/></a>}modal>editpage </Popup>
              <a   onClick={()=>{deletfunction(`${user.id}`)}} style={{"marginLeft":"20px"}} ><AiFillDelete size={40} color={"red"}/></a> 

            </td>
            </tr>
            )
            }
            </tbody>
            </table>
             </center> 
        </div>
        <div style={{"textAlign":"center"}}>
          <div >
            <button onClick={backPageHandlear}><AiFillFastBackward size={40} /></button>
            <a style={{"paddingLeft":"20px","paddingRight":"20px","fontSize":"30px"}}>Page No: {pageNo}</a>
            <button onClick={nextPageHandlear}><AiFillFastForward size={40}/></button>  

          </div>
          
        </div>
    </div>
  )
}

export default Users