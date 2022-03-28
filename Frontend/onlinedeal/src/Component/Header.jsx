import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-light">
        <div className="container-fluid" style={{ backgroundColor: "#c3d6d9"}}>
          <div className="row g-3">
            <div className="col-md-3 text-center" >
              <Link to="/">
                <img
                  alt="logo"
                  src="./images/logo.webp"
                />
              </Link>

            </div>
            <div className="col-md-5 text-center" >
              <h1 style={{color:"red"}}>Deals and coupons</h1>
              </div>
              
          
        </div>
      </div>
    </header>
    </React.Fragment >
  )
}

export default Header