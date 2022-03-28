import React from 'react';
import { Link } from 'react-router-dom';
import CardDealsOfTheDay from './card/CardDealsOfTheDay';
import Slider from './carousel/Slider';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Navbar />

            <Slider /><br />
            <br />
            <br />
            <div className="container-fluid bg-light mb-3">
                <div className="row">
                    <div className="col-md-12">
                        <CardDealsOfTheDay
                            endDate={Date.now() + 1000 * 60 * 60 * 14}
                            title="Deals of the Day"
                            to="/">
                         <div className="row">
                            <div className="col-md-3">
                                <Link to="/" className="text-decoration-none">
                                    <img
                                        src="./images/products/tshirt_black_480x400.webp"
                                        className="img-fluid rounded-circle"
                                        alt="..."
                                    />
                                    
                                </Link>
                            </div>

                            <div className="col-md-3">
                            <Link to="/" className="text-decoration-none">
                                <img
                                    src="./images/products/tshirt_green_480x400.webp"
                                    className="img-fluid rounded-circle"
                                    alt="..."
                                />

                            </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/" className="text-decoration-none">
                            <img
                                src="./images/products/tshirt_grey_480x400.webp"
                                className="img-fluid rounded-circle"
                                alt="..."
                            />

                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/" className="text-decoration-none">
                            <img
                                src="./images/products/tshirt_red_480x400.webp"
                                className="img-fluid rounded-circle"
                                alt="..."
                            />

                        </Link>
                    </div>
                    </div>
                </CardDealsOfTheDay>
            </div>
        </div>
            </div >
            <div className="bg-info bg-gradient p-3 text-center mb-3">
                <h4 className="m-0">Explore Fashion Collection</h4>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/" className="text-decoration-none">
                            <img
                                src="./images/category/male.webp"
                                className="img-fluid rounded-circle"
                                alt="..."
                            />
                            <div className="text-center h6">Men's Clothing</div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/" className="text-decoration-none">
                            <img
                                src="./images/category/female.webp"
                                className="img-fluid rounded-circle"
                                alt="..."
                            />
                            <div className="text-center h6">Women's Clothing</div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/" className="text-decoration-none">
                            <img
                                src="./images/category/smartwatch.webp"
                                className="img-fluid rounded-circle"
                                alt="..."
                            />
                            <div className="text-center h6">Smartwatch</div>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to="/" className="text-decoration-none">
                            <img
                                src="./images/category/footwear.webp"
                                className="img-fluid rounded-circle"
                                alt="..."
                            />
                            <div className="text-center h6">Footwear</div>
                        </Link>
                    </div>
                </div>
                <br />
                <br />
                <br />






            </div>
            <Footer />
            </React.Fragment >

    )
}
export default Home