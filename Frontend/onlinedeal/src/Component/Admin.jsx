import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav2 from './Nav2';
 import Header from './Header';
// import Nav from './Nav';

const Admin = () => {


    const [data, setData] = useState([]);

    const getCoupon = () => {

        try {

            axios.get("/coupon/getcoupon")
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
                })
        }
        catch (error) {
            console.log(error)
        };

    }

    const deleteCoupon = (id) => {

        try {
            if (
                axios.delete(`/coupon/d/${id}`)
                    .then(response => {
                        console.log(response);
                        getCoupon();

                    })) { alert("Coupon id " + id + " is deleted") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }


        useEffect(() => {
            getCoupon();



        }, []);
        return (
            <>
                <Header />
                <Nav2 /> 
                <div style={{ backgroundColor: "#d0e6f3" }}>
                    <div>
                        <center> <h1>All the Coupon details is below</h1></center><hr />
                    </div>


                    <div>


                        {/* <div style={{ backgroundColor: "#62bef6", width: "90%", marginLeft: "5%" }}> */}

                        {data.map((detail, index) =>
                            <div className='cards'>
                                <div className='cards_Info'>
                                    <div key={detail.id}>
                                        <h5 className='card_category'>Index: {index + 1}</h5>
                                        <h5 className='card_category'>Coupon id:- {detail.id}</h5>
                                        <h5 className='card_category'>Coupon code:-{detail.code}</h5>
                                        <h5 className='card_category'>percentage:- {detail.percentage}</h5>
                                        <h5 className='card_category'>maxLimit:- {detail.maxLimit}</h5>

                                        <center> <button style={{ backgroundColor: "#d0e6f3", color: "red" }} ><Link to="/post">Add/Update</Link></button></center>
                                        

                                  <center><button onClick={() => deleteCoupon(detail.id)} style={{ color: "red" }}>delete</button></center>






                                    </div>
                                </div>
                            </div>


                        )}
                    </div>
                </div>

            </>
        )
    }


export default Admin