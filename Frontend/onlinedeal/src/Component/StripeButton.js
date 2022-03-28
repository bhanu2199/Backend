import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

import Footer from "./Footer";

const StripeButton = ({ price,id }) => {
  const publishableKey = "pk_test_51Jg8ikSCkVGSmTrqgG2ASVz9qR0jWA0TiEzN2BgDedDvp3H9mgddqi578uZmDbfjzKAb3Qu0OehLrZTJxDhAVxlC00SPDFH36d";
  const stripePrice = price * 100;
const cartId=id;

  const onToken = (token) => {
    console.log(token);
    axios
      .post("http://localhost:8083/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
        // UpdateOrder(cartId);

        alert("Your code "+localStorage.getItem("code"));
      })
      .catch((error) => {
        console.log(error);
        alert("Payment failed");
      });
  };

 

  return (
    <>
   <Header/>
   
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "skyblue",
        position: "relative",
        top:"5em",
        
      }}
    >
      <div class="card card-deck"
      style={{
        width: "30em",
        height: "18em",
        backgroundColor: "lightgreen"
      }}>
        <div className="card-head"
        style={{
          position: "relative",
          top: "4em",
          left: "6em"
        }}>
          <h1 className="mt-2">Secure Payment</h1>
           <p>Your Security is important for us. </p>
        </div>
        <div className="card-body"
        style={{
          position: "relative",
          top: "2em",
          left: "9em"
        }}>
        <StripeCheckout className="mt-5"
          amount={stripePrice}
          label="Bharat Pe"
          name="Payment Gateway"
          // image="https://svgshare.com/i/CUz.svg"
          // description={`Your total is ${price}`}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
          currency="INR"
        />
         <center><button class="btn m-2 mt-3" type="submit"><Link to="/coupon">Go Back</Link></button></center>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default StripeButton;