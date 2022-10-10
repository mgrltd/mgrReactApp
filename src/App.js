import React, { useState }  from 'react'
import "./index.css";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import BodyLeft from './pages/BodyLeft';
import Header from "./pages/Header"
import Home from './pages/Home';
import Services from './pages/Services';
import NoService from './pages/NoService';
import Languages from './pages/Languages';
import Customer from './pages/Customer';
import Pagenashan from './pages/Pagenashan';
import Charts from './pages/Charts';
import Game from './pages/Game';
import EmpRegister from './pages/EmpRegister';
import Login from './authentication/Login';
import ForgetPassword from './authentication/ForgetPassword';
import Register from './authentication/Register';
import Users from './admin/Users';
function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken
  }
const App = () => {
  const token = getToken();
console.log("token -"+token)
  // if(token==null)
  // {
  //   return (
  //     <div style={{backgroundImage: `url("https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg")`,"paddingTop":"10%","paddingLeft":"50%","height":"700px"}}>
  //     <BrowserRouter>
  //                 <Routes>
  //                     <Route path='/' element={<Login />}  />
  //                     <Route path='/forgetpassword' element={<ForgetPassword />}  />
  //                     <Route path='/register' element={<Register />}  />

  //                 </Routes>
  //         </BrowserRouter>
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
                      <Route path='/' element={<Home />}  />
                      <Route path='/services' element={<Services />}  />
                      <Route path='' element={<NoService />}  />
                      {/* <Route path='/allusers' element={<Users />}  /> */}
                      <Route path='/languages' element={<Languages />}  />
                      <Route path='/customer' element={<Customer />}  />
                      <Route path='/pagenashan' element={<Pagenashan />}  />
                      <Route path='/empregister' element={<EmpRegister />}  />
                      <Route path='/charts' element={<Charts />}  />
                      <Route path='/game' element={<Game />}  />
                      <Route path='/users' element={<Users />}  />


                  </Routes>
                </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
