
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <React.Fragment>
      <footer>

        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">About</div>
              <hr />
              <p>
               E-commerce is revolutionizing the way we all shop in India.
                This website helps to find the best deals on the 
                products.Users can also apply best coupons to reduce
                the price. For smooth shooping this website is helpful.
                For those of you with erratic working hours, Deals and coupons
                is your best bet.This site never sleeps.
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Products</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Electronics
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Mobiles
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Car & bike
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Super Market
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Travel Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Policy</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Security
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Privacy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    EPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Address</div>
              <hr />
              <address>
                <strong>Deals & Coupons</strong>
                <br />
                84 Sakchi market
                <br />
                Jamshedpur, pin 94103
                <br />
                <abbr title="Phone"></abbr> (123) 456-7890
              </address>
              <div className="h6">Customer Care</div>
              <hr />
               +91800 100 1000
              <br />
               deals-coupons@email.com
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                 Partner with us
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                 Advertise
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                 Gift
              </Link>
            </div>
            <div className="col-md-3 py-2">
              © 2021-{new Date().getFullYear()} Deals-Coupons.com
            </div>
            <div className="col-md-3 py-2 bg-white">
              <img
                src="./images/payment/american_express.webp"
                width="32"
                alt="American Express"
                className="mr-2"
              />
              <img
                src="./images/payment/maestro.webp"
                width="32"
                alt="Maestro"
                className="mr-2"
              />
              <img
                src="./images/payment/netbanking.webp"
                width="32"
                alt="Net Banking"
                className="mr-2"
              />
              <img
                src="./images/payment/paypal.webp"
                width="32"
                alt="Paypal"
                className="mr-2"
              />
              <img
                src="./images/payment/rupay.webp"
                width="32"
                alt="Rupay"
                className="mr-2"
              />
              <img
                src="./images/payment/upi.webp"
                width="32"
                alt="UPI"
                className="mr-2"
              />
              <img
                src="./images/payment/visa.webp"
                width="32"
                alt="Visa"
                className="mr-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;