import React, { useState }  from 'react'
import "./index.css";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import BodyLeft from './pages/BodyLeft';
import Header from "./pages/Header"
import Home from './pages/Home';
import Services from './pages/Services';
import NoService from './pages/NoService';
import Users from './pages/Users';
import Languages from './pages/Languages';
import Customer from './pages/Customer';
import Pagenashan from './pages/Pagenashan';
import Charts from './pages/Charts';
import Game from './pages/Game';
import Register from './pages/Register';
import Login from './Login';
const App = () => {
  // const[loginStatues,setloginStatues]=useState(false)
  // const submithandler=()=>{
  //   setloginStatues(true)
  // }
  // if(loginStatues!=true)
  // {
  //   return (
  //     <div>
  //       <center>
  //      <h1>login page</h1>
  //      userName:<input type="text" /><br /><br />
  //      password:<input type="text" /><br /><br />
  //      <input onClick={submithandler} type="submit" />
  //      </center>
  //     </div>
  //   )
  // }
  return (
    <div className='app'>
      <div className='head'>
        <Header />
      </div>
      <div className='body'>
        <div className='bodyleft'>
           <BodyLeft />
        </div>
        <div className='bodyright'>
            <BrowserRouter>
                  <Routes>
                      <Route path='/home' element={<Home />}  />
                      <Route path='/services' element={<Services />}  />
                      <Route path='' element={<NoService />}  />
                      <Route path='/allusers' element={<Users />}  />
                      <Route path='/languages' element={<Languages />}  />
                      <Route path='/customer' element={<Customer />}  />
                      <Route path='/pagenashan' element={<Pagenashan />}  />
                      <Route path='/register' element={<Register />}  />
                      <Route path='/chsrts' element={<Charts />}  />
                      <Route path='/game' element={<Game />}  />

                  </Routes>
                </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
