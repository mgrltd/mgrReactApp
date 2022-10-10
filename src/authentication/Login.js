import axios from 'axios';
import React,{useState} from 'react'
import Popup from 'reactjs-popup';


const Login = () => {
    const[step2,setStep2]=useState(true)
//const[loginRequest,setloginRequest]=useState({ "type":"byUsername","userName":"ss","userPassword":"sweety"})

const[type,setType]=useState("user");
const[userName,setuserName]=useState("");
const[userPassword,setuserPassword]=useState("");
const[otp,setotp]=useState("");

const[loginresponse,setloginresponse]=useState(null);
const[responseEmail,setresponseEmail]=useState("rcreddy7093@gmail.com");

const userNameHandlear=(e)=>{
  setuserName(e.target.value);
  if(!isNaN(e.target.value))
    setType("byPhoneNumber");
  else
  {
    if((e.target.value).match("@gmail.com")!=null)
      setType("byEmail");
    else
    setType("byUsername");
  }
}

      const loginValidashan=()=>{
        axios
        .post("http://localhost:8008/login",{type,userName,userPassword})
        .then(data =>  { 
          setloginresponse(data.data)
          if(data.data.responseCode==200)
          {
            setStep2(false);
            setresponseEmail(data.data.responseBody);
            alert(data.data.responseCode+""+data.data.responseMessage);
           }
          if(data.data.responseCode!=200)
          {
         alert(data.data.responseCode+""+data.data.responseMessage);
          }

        })
        .catch(error =>  alert(error));
      }

    const submithandler=()=>{
      axios
    .get(`http://localhost:8008/validashanOtp/${responseEmail}/${otp}`)
    .then(data =>  { 
      
       if(data.data.responseCode==200)
       {
      let token= sessionStorage.setItem('token', JSON.stringify("ramachandra"));
      window.location.reload(false);
      console.log("token set sucessfully"+token);
       }
       else
       {
        alert(data.data.responseCode+" "+data.data.responseMessage);
       }
    })
    .catch(error =>  alert(error));
    }
    return (
      <div style={{"textAlign":"center"}}>
        {userName},{type}
        {/* if step2 is true open login  or false open twostep verification page */}
        {step2 ?
      <div style={{"width":"400px","height":"500px","padding":"10px","border": '1px solid black'}} >
       <h1>Login To MGR </h1>
        <p style={{"color":"red"}}>Sign in  with UserName or Phone Number or E-Mail</p>
       User Id:<input onChange={userNameHandlear} type="text" placeholder='userName,e-mail,phoneNumber'style={{"fontSize":"20Px"}}/><br /><br />
       Password:<input onChange={(e)=>{setuserPassword(e.target.value)}}  type="password" placeholder='password' style={{"fontSize":"20Px"}}/><br /><br />
       <input style={{"padding":"10px","backgroundColor":"chartreuse"}} className='addb' onClick={loginValidashan} type="submit" value={"Next"} />
       <br />
       <a href='/forgetpassword' style={{"fontSize":"20Px"}}>ForgetPassword</a>
       <br />
       <hr />
       <p>Create New Account</p>
       <a href='/register' style={{"padding":"7px","backgroundColor":"Orange"}}   type="submit" >Create MGR  new account</a>
       </div>
       :
      //  ofter login two-step verification page
       <div style={{"width":"400px","height":"500px","padding":"10px"}} >
       <h1>2 step verification</h1>
        <p>otp send ur mail "{loginresponse.responseMessage}{loginresponse.responseBody}"</p>
        <input onChange={(e)=>{setotp(e.target.value)}}  type="text" placeholder='enter OTP'style={{"fontSize":"20Px"}} /><br /><br />
        <input style={{"padding":"10px","backgroundColor":"chartreuse"}} className='addb' onClick={submithandler} type="submit" value={"Login"} /><br /><br />
        <a href='' style={{"fontSize":"20Px"}}>Resed OTP</a>
       </div>

       }
      responseBody
      </div>
    )
  }

export default Login