import React,{useState} from 'react'

const Login = () => {
    const[loginStatues,setloginStatues]=useState(false);

    const submithandler=()=>{
      setloginStatues(true)
    }
    return (
      <div>
        <center>
       <h1>login page</h1>
       userName:<input type="text" /><br /><br />
       password:<input type="text" /><br /><br />
       <input onClick={submithandler} type="submit" />
       </center>
      </div>
    )
  }

export default Login