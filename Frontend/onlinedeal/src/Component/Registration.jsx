import React from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import "./Login.css"
import Footer from './Footer';


const Registration = () => {

    var auth = JSON.stringify(localStorage.getItem("auth"))
    console.log("this is auth string :" + auth);

    const nav = useNavigate();
    const [input, setInput] = useState({
       
        username: "",
        password: "",
        role: "",


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
            axios.post("http://localhost:8090/subs", {
               
                username: input.username,
                password: input.password,
                role: input.role,


            })
                .then(response => {
                    console.log(response.data.response);

                    const a = localStorage.setItem("auth", JSON.stringify(response.data.response))
                    alert("Registered Succesfully");
                    nav("/login");

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
            <div class="form-bg" style={{ paddingLeft: "35%", paddingTop: "5%", height: "560px", background: "#6ba9b3" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <div class="form-container">
                                <form class="form-horizontal">
                                    <h3 class="title">SignUp Here</h3>
                                    <div class="form-group">
                                        <span class="input-icon"><i class="fa fa-user"></i></span>
                                        <input class="form-control" type="text" name="username" placeholder=" Create Username" onChange={inputEvent} value={input.username} required />
                                    </div>
                                    <div class="form-group">
                                        <span class="input-icon"><i class="fa fa-lock"></i></span>
                                        <input class="form-control" name="password" type="password" placeholder=" Create Password" onChange={inputEvent} value={input.password} required />
                                    </div>
                                    <div  style={{width:"300px",height:"50px"}}>

                                        <label htmlFor="role" style={{ color: "white" }}>Choose a Role:</label>

                                        <select name="role" id="role" value={input.role} onChange={inputEvent}  >
                                            <option value="NA">Select Role</option>
                                            <option value="user">user</option>

                                            <option value="admin">admin</option>

                                        </select>

                                    </div>

                                    <button class="btn signin" onClick={showdata}>submit</button>
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
export default Registration