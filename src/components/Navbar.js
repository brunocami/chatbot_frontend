import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
            <div className="container d-flex justify-content-center">
                <Link className="navbar-brand text-success" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03" style={{flexGrow: "unset"}}>
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <Link className="nav-link active text-success" to="/">Home
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success" to="/form">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success" to="/">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success" to="/">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar