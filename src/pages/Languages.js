import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import EditLangvage from './EditLangvage';
import AddLangvage from './AddLangvage';
const Customer = () => {
  const [users, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/alllanguages")
      .then(
        (result) => {
          setItems(result.data);
        },
        (error) => {
          alert(error)
        }
      )
  }, [])
  
  const deletfunction = (value) =>{
    axios
    .get(`http://localhost:8080/deletlanguagebyid/${value}`)
    .then(data =>   alert(data.data))
    .catch(error =>  alert(error));
    this.setState((prev)=>{
        console.log(prev);
        return ({bool: !this.state.bool})
    })
};

  return (
    <div>
      Customer{users.length}
      <div className='addb'>
    <Popup trigger={<button className='add'><img src="https://cdn.pixabay.com/photo/2014/04/02/10/41/button-304224_1280.png" width="50px" height="50px" />
</button>} modal>
     <AddLangvage />
    </Popup>

    </div>
      
      <center>
<h1 className = "text-center"> Languages List</h1>
<table className = "table">
<thead className='thead'>
<tr className='tr'>
<td className='td'> id</td>
<td className='td'> languageName</td>
<td className='td'> DisplayType</td>
<td className='td'> action</td>
</tr>
</thead>
<tbody>
{
users.map(
user => 
<tr className='tr' key = {user.id}>
<td className='td'> {user.id}</td> 
<td className='td'> {user.languageName}</td> 
<td className='td'> {user.displayType}</td> 
<td>
   <Popup trigger={<button className='editb'  >Edit</button>}modal> <EditLangvage id={`${user.id}`} /></Popup>
<button className='deletb'  onClick={()=>{deletfunction(`${user.id}`)}}>Delet</button> 

</td>
</tr>
)
}
</tbody>
</table>
</center>
    </div>
  )
}

export default Customer