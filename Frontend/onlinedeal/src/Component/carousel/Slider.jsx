import React from 'react'
import { Carousel } from 'react-bootstrap';

const img = {
    width: "100%",
    height: "500px"
}
const Slider = () => {


    return (
        <>

            <div style={{ backgroundColor: "red" }}>
                <Carousel>
                    <Carousel.Item>
                        <img style={img}

                            src="./images/banner/Dell.webp"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Welcome HMS</h3>
                            <p>Visit Now</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={img}
                            src="./images/banner/Laptops.webp"
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={img}
                            src="./images/banner/Quick-heal.webp"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>





        </>


    )
}

export default Slider