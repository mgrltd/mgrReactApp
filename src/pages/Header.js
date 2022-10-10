import React from 'react'
import { AiOutlinePoweroff,AiFillBell } from 'react-icons/ai';

const Header = () => {

  const logoutHandler=()=>{
    sessionStorage.setItem('token', JSON.stringify(null));
    window.location.reload(false);
    console.log("logoutHandler function")
      }
  return (
    <div>
        <div style={{"textAlign":"center"}}>
        <a>well come</a>
        </div>

        <div style={{"fontSize":"30px"}}>
          <a>Ramachandra</a>
        </div>
        
        <div className='addb' style={{"paddingRight":"30px"}}>
        <a href="/" > <AiFillBell style={{"fontSize":30,"paddingRight":"10px"}} />  </a>
         {/* <form> */}
        <a onClick={logoutHandler}><AiOutlinePoweroff style={{"fontSize":30,}} /></a>    
        {/* </form> */}
        </div>
    </div>
  )
}

export default Header