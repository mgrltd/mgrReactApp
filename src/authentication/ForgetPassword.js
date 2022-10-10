import React, { useState } from 'react'

const ForgetPassword = () => {
    const[otpststatus,setotpstatus]=useState(false)
    const[forgetPasswordStatus,seFforgetPasswordStatus]=useState(false);
    const[savePasswordStatus,setSavePasswordStatus]=useState(false);

    const sendotpHandler=()=>{


        //forgetpassword/sendOtp/{mail}

        setotpstatus(true);
    }
const otpverifyHandler=()=>{
    seFforgetPasswordStatus(true);
}
const savePasswordHandler=()=>{
    setSavePasswordStatus(true);

}
if(savePasswordStatus)
{
    return(
        <div>
            <h1>Password change sucessfully
           Go to   <a href='/' style={{"fontSize":"20Px","border-style": "groove","backgroundColor":"chartreuse","padding":"10px"}}>Login</a>
           </h1>
        </div>
    )
}
  return (
    <div >
    <h1>ForgetPassword</h1> 
    <div style={{"padding":"20px","height":"300px","width":"300px","border": '1px solid black'}}>
    {!forgetPasswordStatus?
    <div>
        {!otpststatus ?
            <div>
                <p>Enter your emailId</p>
                <input type="text" placeholder='e-mail'style={{"fontSize":"20Px"}} /><br /><br />
                <input type="submit" onClick={sendotpHandler}  style={{"padding":"10px","backgroundColor":"chartreuse"}} className="addb"  value={"Send OTP"} />
            </div>
            :
            <div>
            <p>Enter OTP</p>
            <input style={{"fontSize":"20Px"}} type="text" placeholder='enter otp'/><br /><br />
            <input type="submit" onClick={otpverifyHandler}  style={{"padding":"10px","backgroundColor":"chartreuse"}} className="addb"  value={"verify"} />

            </div>
            }
    </div>
    :
    <div>
        <p>enter password</p>
        <input style={{"fontSize":"20Px"}} type="text" placeholder='enter password'/><br />
        <p>enter confoum password</p>
       <input style={{"fontSize":"20Px"}} type="text" placeholder='enter confoum password'/><br /><br />
       <input  type="submit" onClick={savePasswordHandler}  style={{"padding":"10px","backgroundColor":"chartreuse"}} className="addb"  value={"Save"} />
    </div>  
    } 
</div>
</div>
  )
}

export default ForgetPassword