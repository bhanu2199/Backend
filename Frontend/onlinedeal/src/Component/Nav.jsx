import React from 'react'



import { useNavigate } from 'react-router-dom'

const Nav = () => {



    const Logout = () => { if (typeof window !== "undefined") { localStorage.removeItem("jwt"); nav("/") } };
    const nav = useNavigate();
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-black text-green">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" style={{ color: "white" }} href="#">e-Commerce</a>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" style={{ color: "white" }} aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style={{ color: "white" }} href="/coupon">Coupons</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" style={{ color: "white" }} href="/news">News</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link active" style={{ color: "white" }} href="/Login" tabindex="-1" aria-label>Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" style={{ color: "white" }} href="/signup" tabindex="-1" aria-label>SignUp</a>
                            </li> */}
                        </ul>
                        
                        {/* <center>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </center> */}
                        
                    </div>


                    <div class="nav navbar-right" >
                        {localStorage.getItem("jwt") && (<ul class="navbar-nav  mb-2 mb-lg-0"> <li className="nav-item">

                            <h6 onClick={Logout} style={{ color: "white", cursor: "pointer" }}>Logout</h6></li></ul>)}



                    </div>

                </div>






            </nav>








        </>

    )
}


export default Nav