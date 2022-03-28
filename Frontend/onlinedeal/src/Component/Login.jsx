import React from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "./Login.css"
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';



const Login = () => {

    var auth = JSON.stringify(localStorage.getItem("auth"))
    console.log("this is auth string :" + auth);

    const nav = useNavigate();


    const [input, setInput] = useState({
        username: "",
        password: "",



    });


    const inputEvent = (event) => {

        const { name, value } = event.target;
        setInput((previousvalue) => {
            console.log(previousvalue.data);
            return {
                ...previousvalue,
                [name]: value,
            }



        });
    };
    const showdata = (event) => {
        event.preventDefault();

        try {
            axios.post("http://localhost:8090/auth", {
                username: input.username,
                password: input.password,

            })
            
            .then(response => {

                console.log(response);
                localStorage.setItem("jwt", JSON.stringify(response.data.response))

                console.log(JSON.stringify(localStorage.getItem("jwt")))

                console.log(response.data.role)

                setInput({ ...input, role: response.data.role })



                if ((response.data.role)==="[admin]") {

                    nav("/admin ");

                    alert('Wecome to Admin Login')

                }
              

               else if ((response.data.role)==="[user]") {

                    nav("/coupon ");

                    alert('Wecome to user Login')

                }
                else{
                    alert("not user")
                }





                }, error => {
                    alert("Fail");
                    console.log(error);
                })






        }
        catch (error) {
            console.log("error is", error)
        };


    }



    return (
        <>
            <Header />
            <Navbar />
            
            <div class="form-bg" style={{ paddingLeft: "35%",paddingTop:"5%", height:"550px",  backgroundColor: "#c3d6d9" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <div class="form-container">
                                <form class="form-horizontal">
                                    <h3 class="title">User Login</h3>
                                    <div class="form-group">
                                        <span class="input-icon"><i class="fa fa-user"></i></span>
                                        <input class="form-control" type="text" name="username" placeholder="Username" onChange={inputEvent} value={input.username} required />
                                    </div>
                                    <div class="form-group">
                                        <span class="input-icon"><i class="fa fa-lock"></i></span>
                                        <input class="form-control" name="password" type="password" placeholder="Password" onChange={inputEvent} value={input.password} required />
                                    </div>
                                    <span class="forgot-pass"><a href="#">Lost password?</a></span>
                                    <span class="forgot-pass"><a href="/signup">signup here</a></span>
                                    <button class="btn signin" onClick={showdata}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            
            
            

            <Footer />
        </>

    )
}

export default Login
