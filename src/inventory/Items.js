import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';

import { AiFillEye,AiFillDelete,AiFillFastForward ,AiFillFastBackward,AiTwotoneFilter} from "react-icons/ai";
import { Base_Url } from '../constants/BaseUrls';

const Items = () => {
  const[seleCategorys,setCategorys]=useState([{name:"USER",status:false},{name:"Grocerys",status:false},{name:"EMP",status:false},{name:"COSTMAR",status:false}])
  const [items, setItems] = useState([]);
  const[pageNo,setPageNo]=useState(1);
  const [sortbyfild, setsortbyfild] = useState("id");
  const [searchword, setsearchword] = useState("");
  const [pageSize, setpageSize] = useState(5);
  const[filterCategorys,setfilterCategorys]=useState([])
 
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
      let updateObj = seleCategorys.map(row=>{
        if(eachrole.name===row.name)
        {
        return {...row,status:e.target.checked}
         } 
        else
        {
          return {...row,status:row.status}
        }})
        setCategorys(updateObj);
           if(e.target.checked==true)
    {
        setfilterCategorys(current=>[...current,e.target.value]) 
    }
    else{
        setfilterCategorys(filterCategorys.filter((each)=>each!==e.target.value))
    }
  }

  useEffect(() => {
    console.log({"pageSize":pageSize,"pageNo":pageNo,"sortbyfild":sortbyfild,"searchword":searchword,"filterroles":filterCategorys})
  axios.post(`http://localhost:8008/getallItems`,{pageNo,pageSize,sortbyfild,searchword,filterCategorys})
      .then(
        (result) => {
          setItems(result.data.responseBody);
        },
        (error) => {
          alert(error)
         }
       ) 
   }, [pageNo,pageSize,sortbyfild,searchword,filterCategorys])
  
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
            <h1 className = "text-center">All Items</h1>
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
              <option value="id">ItemId</option>
              <option value="itemCode" >itemCode</option>
              <option value="itemName">itemName</option>
              <option value="mrp" >mrp</option>
            </select> 
          </span> 
              <span style={{"paddingLeft":"70px"}}>
              filterBy <Popup trigger={<button><AiTwotoneFilter size={25} /></button>} >
              <div style={{"backgroundColor":"BurlyWood","padding":"10px"}}>
                  seletroles <br></br>
                  {seleCategorys.map(eachrole=>(<><input type="checkbox" checked ={eachrole.status} value={eachrole.name} onClick={(e)=>{roleslist(e,eachrole)}}/>{eachrole.name}<br/></>))}
                  </div>
              </Popup>
              </span>

    </div>
    <hr />
            <center>
            <table className = "table">
            <thead className='thead'>
            <tr className='tr'>
            <td className='td'> itemId</td>
            <td className='td'> photo</td>
            <td className='td'> itemCode</td>
            <td className='td'> itemName</td>
            <td className='td'> mrp</td>
            <td className='td'> costPrice</td>
            <td className='td'> sellingPrice</td>
            <td className='td'> category</td>
            <td className='td'> Action</td>
            </tr>
            </thead>
            <tbody>
            {
            items.map(
            item => 
            <tr className='tr' key = {item.id}>
            <td className='td'> {item.id}</td> 
            <td className='td'> <img src={`${Base_Url}/photo/${item.photo.id}`} width={50} height={60}/>{item.photo.name}</td>
            <td className='td'> {item.itemCode}</td> 
            <td className='td'> {item.itemName}</td>
            <td className='td'> {item.mrp}</td> 
            <td className='td'> {item.costPrice}</td>
            <td className='td'> {item.sellingPrice}</td> 
            <td className='td'> {item.categoryId.categoryName}</td> 
            <td>
              <Popup trigger={<a ><AiFillEye size={40} color={"#ADFF2F"}/></a>}modal>editpage </Popup>
              <a   onClick={()=>{deletfunction(`${item.id}`)}} style={{"marginLeft":"20px"}} ><AiFillDelete size={40} color={"red"}/></a> 

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

export default Items