import React, { useState } from 'react'

const Register = () => {
    const [step,setStep]=useState(1);
   
    const submitHandeler=()=>{

    }

    const project = () => {          
     
        switch(step) {
    
          case 1: return <div>
                         <div style={{"fontSize":"20px"}}>
                            <h1>step 1</h1>
                           E-Mail:<a style={{"color":"red"}}>email mustanshoud</a>   <br />
                           <input type="text" placeholder='enter e-mail'style={{"fontSize":"20Px"}}/><br />
                            PhoneNumber:<br />
                            <input type="text" placeholder='enter phoneNumber'style={{"fontSize":"20Px"}}/><br />
                          UserName: <br />
                          <input type="text" placeholder='enter userName'style={{"fontSize":"20Px"}}/><br />
                           Password: <br />
                           <input type="text" placeholder='enter password'style={{"fontSize":"20Px"}}/><br />
                           ConfoumPassword:<br />
                            <input type="text" placeholder='enter confoumPassword'style={{"fontSize":"20Px"}}/><br />
                         </div>
                         <input type="submit" onClick={()=>{setStep(2)}}  style={{"padding":"10px","backgroundColor":"#FFEBCD"}} className="addb"  value={"next"} />
                         </div>;
          case 2: return <div>
                         <div style={{"fontSize":"20px"}}>
                            <h1>Details</h1>
                            Photo:<input type="file" style={{"fontSize":"20Px"}}/>
                            FirstName:<br />
                            <input type="text" placeholder='enter first name'style={{"fontSize":"20Px"}}/><br />
                            SecondName:<br />
                            <input type="text" placeholder='enter secound name'style={{"fontSize":"20Px"}}/><br />
                            LostName:<br />
                            <input type="text" placeholder='enter lost name'style={{"fontSize":"20Px"}}/><br />
                         </div>
                         <br />
                         <input type="submit" onClick={()=>{setStep(1)}}  style={{"padding":"10px","backgroundColor":"#F5F5DC"}}   value={"back"} />
                         <input type="submit" onClick={()=>{setStep(3)}}  style={{"padding":"10px","backgroundColor":"#FFEBCD"}} className="addb"  value={"next"} />
                         </div>;
          case 3: return <div>
                         <div style={{"fontSize":"20px"}}>
                            <h1>Address</h1>
                            PinCode:<br />
                           <input type="text" placeholder='enter Pincode'style={{"fontSize":"20Px"}}/><br />
                           Country:<br />
                           <input type="text" placeholder='e'style={{"fontSize":"20Px"}}/><br />
                           State:<br />
                           <input type="text" placeholder='e'style={{"fontSize":"20Px"}}/><br />
                           Districk:<br />
                           <input type="text" placeholder='e'style={{"fontSize":"20Px"}}/><br />
                           LandMark:<br />
                           <input type="text" placeholder='enterland mark'style={{"fontSize":"20Px"}}/><br />
                           Area:<br />
                           <input type="text" placeholder='enter Area'style={{"fontSize":"20Px"}}/><br />
                            Hous NO:<br />
                           <input type="text" placeholder='enter hous number'style={{"fontSize":"20Px"}}/><br />
                         </div>
                         <br />
                         <input type="submit" onClick={()=>{setStep(2)}}  style={{"padding":"10px","backgroundColor":"#F5F5DC"}}   value={"back"} />
                         <input type="submit" onClick={()=>{setStep(4)}}  style={{"padding":"10px","backgroundColor":"#FFEBCD"}} className="addb"  value={"Preview And Submit"} />
                        </div>;
          case 4: return <div>
                         <div>
                            <h1>step 4</h1>
                            Photo
                           <br /> FirstName
                           <br />   SecondName
                           <br />  LostName
                           <br />  E-Mail:
                           <br />  PhoneNumber:
                           <br />  UserName:
                           <br /> PinCode
                           <br /> Country
                           <br /> State
                           <br /> Districk
                           <br /> LandMark
                           <br /> Area
                           <br /> Hous NO:
                         </div>
                         <br />
                         <input type="submit" onClick={()=>{setStep(1)}}  style={{"padding":"10px","backgroundColor":"#F5F5DC"}}   value={"Edit"} />
                         <input type="submit" onClick={submitHandeler}  style={{"padding":"10px","backgroundColor":"chartreuse","textAlign":"center","paddingLeft":"50px","paddingRight":"50px","marginLeft":"30%"}} value={"submit"} />
                        </div>;
          default: return <div>No project match</div>
        }
     }
    
    
  return (
    <div style={{"padding":"20px","height":"600px","width":"400px","border": '1px solid black'}}>
        <h1 style={{"textAlign":"center","color":"#191970"}}>Create New MGR Account</h1>
        <hr />
         <div>{ project() }</div>
     
    </div>
  )
}


export default Register