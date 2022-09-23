import React,{useState} from 'react';
import axios from 'axios';

const AddLangvage=()=> {

  const [languageName,setlanguageName]=useState("")
  const [displayType,setdisplayType]=useState("")


  const onsubmitevent=(e)=>{
    e.preventDefault();
   axios
    .post("http://localhost:8080/addlanguage",{languageName,displayType})
    .then(data =>  { alert(data.data)})
    .catch(error =>  alert(error));
    
  };
 
  return (
    <div style={{"backgroundColor":"brown","padding":"20px"}}>
      <center>
      <h1>Add Language</h1>
      <form  onSubmit={onsubmitevent}>
      LanguageName:<input type="text"  onChange={(e)=>{setlanguageName(e.target.value)}} /><br /><br />
        DisplayType :<input type="text" onChange={(e)=>{setdisplayType(e.target.value)}} /><br /><br />
        <input type="submit" className='saveb' value="save" />
      </form>
      </center>
    </div>
  );
}

export default AddLangvage;