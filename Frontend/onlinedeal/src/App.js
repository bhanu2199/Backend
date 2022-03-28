import React from 'react';
import Login from './Component/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Registration from './Component/Registration';
import { Route, Routes } from "react-router-dom";

import Home from './Component/Home';
import Coupon from './Component/Discount/Coupon';
import News from './Component/News';

import StripeButton from './Component/StripeButton';
import Admin from './Component/Admin';
import PostCoupon from './Component/PostCoupon';
import { ProtectedRoute } from './Protect';


const App = () => {
    return (




        <>
            <Routes>
            <Route element={<ProtectedRoute allowedRole={"[user]"} />}> 
             
          
           
             </Route>
             <Route element={<ProtectedRoute allowedRole={"[user]"} />}>
           
                  </Route>
              {localStorage.getItem("jwt") ?    <Route exact path='/admin' element={<Admin/>} /> : null}
             <Route exact path='/post' element={<PostCoupon/>} />
            {localStorage.getItem("jwt") ?      <Route exact path='/coupon' element={<Coupon />} /> : null}
            <Route exact path='/pay' element={<StripeButton />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Registration />} />
                
                <Route exact path='/' element={<Home />} />
                
                
            
               
              
               <Route exact path='/news' element={<News />} />



            </Routes>
        </>
    )
}

export default App
