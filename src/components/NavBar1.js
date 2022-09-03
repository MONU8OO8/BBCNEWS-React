import React from 'react'
import { Link } from "react-router-dom";
// import { HiMenu } from "react-icons/hi";

// let mystyle = {
//     textDecoration: 'none',
//     color: 'black'
// }

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a className="navbar-brand px-2 text-danger" href="/">BBC-News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav text-light mr-auto">
                        <Link className="nav-item active mx-3 text-light text-decoration-none" to="/">
                            Home
                        </Link>
                        <Link className="nav-item mx-2 text-light text-decoration-none" to="/general">general
                        </Link>
                        <Link className="nav-item mx-2 text-light text-decoration-none" to="/business">
                            business
                        </Link>
                        <Link className="nav-item mx-2 text-light text-decoration-none" to="/entertainment">
                            entertainment
                        </Link>
                        <Link className="nav-item mx-2 text-light text-decoration-none" to="/health">
                            health
                        </Link>
                        <Link className="nav-item mx-2 text-light text-decoration-none" to="/science">
                            science
                        </Link>
                        <Link className="nav-item mx-2 text-light text-decoration-none" to="/sports">
                            sports
                        </Link>
                        <Link className="nav-item mx-2 text-light text-decoration-none" to="/technology">
                            technology
                        </Link>

                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        </div>
    )
    // }
    // }
}

export default NavBar

