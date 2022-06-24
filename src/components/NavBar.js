 import React from 'react'
import {Link} from "react-router-dom";

let mystyle = {
    textDecoration: 'none',
    color: 'white'
}
const NavBar = ()=> {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar- bg-" style={{backgroundColor: 'red', height:'5rem'}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand"  style= {mystyle} to="/">
                            {/* <h1>BBC</h1> */}
                            <img src="../BBC.png" alt="" style={{height: "100px"}}/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link"  style={mystyle} to="/">home</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link"  style={mystyle} to="/general">general</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link"  style={mystyle} to="/business">business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link"  style={mystyle} to="/entertainment">entertainment</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link"  style={mystyle} to="/health">health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link"  style={mystyle} to="/science">science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link"  style={mystyle} to="/sports">sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link"  style={mystyle} to="/technology">technology</Link></li>
                                 
                            </ul>
                             
                        </div>
                    </div>
                </nav>
            </div>
        )
    // }
// }
}

export default NavBar

