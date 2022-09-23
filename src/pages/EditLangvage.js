import React,{useState, useEffect} from 'react';
import axios from 'axios';

const EditLangvage = (props) => {
  const [id,setid]=useState(props.id)
  const [languageName,setlanguageName]=useState("")
  const [displayType,setdisplayType]=useState("")
  const olddata = () => {
    axios
  .get(`http://localhost:8080/getlanguagebyid/${props.id}`)
  .then(response =>  { setlanguageName(response.data.languageName);setdisplayType(response.data.displayType) })
  .catch(error =>  alert(error));
  }
  useEffect(()=>{
    olddata()
  },[])

  const onsubmitevent=(e)=>{
    e.preventDefault();
    console.log('entered');
    axios
     .post("http://localhost:8080/addlanguage",{id,languageName,displayType})
     .then(data =>  {console.log(data.data); alert(data.data)})
     .catch(error =>  alert(error));
     
   };
  return (
    <div style={{"backgroundColor":"LightGray","padding":"20px"}}>
       <h1>EditLanguage  {props.id} </h1> 
       
       <center>
      <form>
      <form  onSubmit={onsubmitevent}>
      {/* <form> */}
      LanguageName:<input type="text"   defaultValue={languageName} onChange={(e)=>{setlanguageName(e.target.value)}} /><br /><br />
        DisplayType :<input type="text"  defaultValue={displayType} onChange={(e)=>{setdisplayType(e.target.value)}}/><br /><br />
        <input type="submit" className='saveb' value="save" />
        {/* <button onClick={onsubmitevent}>save</button> */}
      </form>
      </form>
      </center>
        </div>
  )
}

export default EditLangvage