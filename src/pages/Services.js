import React from 'react'
import { AiOutlineUsergroupAdd,AiOutlineDollar ,AiOutlineFork,AiOutlineShoppingCart,AiFillSignal} from "react-icons/ai";

const Services = () => {
  return (
    <div> 
      <h1>all Services</h1>
     <div className='gridmain'>
        <div className='grid'>
        <a href="/users" >
          <AiOutlineUsergroupAdd style={{"fontSize":"70px"}} />
           <br />
             Admin
         </a>
        </div>
        <div className='grid'>
        <a href="" >
        <AiOutlineDollar style={{"fontSize":"70px"}} />

           <br />
           Inventory
         </a>
        </div>
        <div className='grid'>
        <a href="" >
        <AiOutlineFork style={{"fontSize":"70px"}} />
           <br />
           Purchases
         </a>
        </div>
        <div className='grid'>
        <a href="" >
        <AiOutlineShoppingCart style={{"fontSize":"70px"}} />
           <br />
           Sales
         </a>
        </div>
        <div className='grid'>
        <a href="" >
        <AiFillSignal style={{"fontSize":"70px"}} />

           <br />
           Reports
         </a>
        </div>

        {/* <div className='grid'>
           <a href="/languages" >
            <img src="https://static8.depositphotos.com/1000128/934/i/600/depositphotos_9349090-stock-photo-telecommunication-and-media-technologies-concept.jpg" width="100px" height="60px" />
            <br />
             Languages
         </a>
         </div>

      <div className='grid'>
       <a href="/" >
            <img src="https://www.icid.org/images/crop_pic.jpg" width="100px" height="60px" />
            <br />
             Crops
         </a>
       </div>

        <div className='grid'>
        <a href="/" >
            <img src="" width="100px" height="60px" />
            <br />
             Threats
         </a>
          </div>

        <div className='grid'>
        <a href="/" >
            <img src="" width="100px" height="60px" />
            <br />
             cp products
         </a>
         </div>

        <div className='grid'>
        <a href="/" >
            <img src="" width="100px" height="60px" />
            <br />
             6 
         </a>
         </div>

        <div className='grid'>
        <a href="/" >
            <img src="" width="100px" height="60px" />
            <br />
             7 
         </a>
         </div>
        <div className='grid'>
        <a href="/" >
            <img src="" width="100px" height="60px" />
            <br />
             9 
         </a>
         </div>

        <div className='grid'>
        <a href="/" >
            <img src="" width="100px" height="60px" />
            <br />
             10 
         </a>
         </div> */}

      </div>

    </div>
  )
}

export default Services