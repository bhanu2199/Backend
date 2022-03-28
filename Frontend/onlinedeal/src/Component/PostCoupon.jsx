import React from 'react'
import { useState } from 'react'
import axios from "axios"
import Header from './Header';
import Nav2 from './Nav2';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const PostCoupon = () => {
    const [input, setInput] = useState({
        "id": "",
        "code": "",
        "percentage": "",
        "maxLimit": "",



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
            if (
                axios.post("/coupon/add", {
                    id: input.id,
                    code: input.code,
                    percentage: input.percentage,
                    maxLimit: input.maxLimit,

                })
                    .then(response => {
                        console.log(response.data);


                    })) { alert("uploaded") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }
    // ..............................................................
    const updateCoupon = (event) => {
        event.preventDefault();

        try {
            if (
                axios.put("/coupon/update", {
                    id: input.id,
                    code: input.code,
                    percentage: input.percentage,
                    maxLimit: input.maxLimit,


                })
                    .then(response => {
                        console.log(response);


                    })) { alert("Data updated") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }



    return (
        <>
<Header/>
<Nav2/>

            <div className="conatiner" style={{backgroundColor:"#c3d6d9"}}>
                <div class="text-center name">
                    <h2 style={{paddingTop:"20px"}}>Post and Update Coupon</h2>
                </div>
                <div class="wrapper">
                    <div className="container col-md-3">
                        <form class="p-3 mt-3">
                            <label className="mt-2">Coupon Id: </label>
                            <div class="form-field d-flex align-items-center"> {" "} <span class="far fa-user"></span>  <input type="text" name="id" id="id" placeholder='id' onChange={inputEvent} value={input.id} required /> </div>
                            <label className="mt-2">Coupon Code: </label>
                            <div class="form-field d-flex align-items-center"> {" "} <span class="far fa-user"></span>  <input type="text" name="code" id="code" placeholder=' CouponCode' onChange={inputEvent} value={input.code} required /> </div>
                            <label className="mt-2">Discount: </label>
                            <div class="form-field d-flex align-items-center"> {" "} <span class="far fa-user"></span>  <input type="text" name="percentage" id="percentage" placeholder='percentage' onChange={inputEvent} value={input.percentage} required /> </div>
                            <label className="mt-2">Price Limit: </label>
                            <div class="form-field d-flex align-items-center"> {" "} <span class="far fa-user"></span>  <input type="text" name="maxLimit" id="maxLimit" placeholder='maxLimit' onChange={inputEvent} value={input.maxLimit} required /> </div>

                            <button class="btn m-2 mt-3 bg-success btn-success" type="submit" onClick={showdata}><Link to="/admin">Post</Link></button>
                            <button class="btn m-2 mt-3 bg-success btn-success" type='submit' onClick={updateCoupon} ><Link to="/admin">Update</Link></button>
                        </form>
                    </div>


                </div>

            </div>
<Footer/>
        </>
    )
}

export default PostCoupon
