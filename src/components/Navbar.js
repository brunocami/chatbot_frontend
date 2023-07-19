import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const user = sessionStorage.getItem('user')
        setUser(user)
    }, [])

    const Logout = () => {
        sessionStorage.removeItem('user');
        window.location.reload();
    }

    if (user) {
        return (
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className='col d-none d-lg-flex'></div>
                <div className="container d-flex justify-content-center col-lg-6">
                    <Link className="navbar-brand" style={{ color: "#25D366" }} to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03" style={{ flexGrow: "unset" }}>
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <Link className="nav-link active" style={{ color: "#25D366" }} to="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "#25D366" }} to="/form">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "#25D366" }} to="/">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "#25D366" }} to="/">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col d-none d-lg-flex justify-content-end'>
                    <span className="navbar-brand" style={{ color: "#25D366" }} onClick={Logout}>Logout</span>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className='col d-none d-lg-flex'></div>
                <div className="container d-flex justify-content-center col-lg-6">
                    <Link className="navbar-brand" style={{ color: "#25D366" }} to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03" style={{ flexGrow: "unset" }}>
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                                <Link className="nav-link active" style={{ color: "#25D366" }} to="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "#25D366" }} to="/form">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "#25D366" }} to="/">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "#25D366" }} to="/">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col d-none d-lg-flex justify-content-end'>
                    <Link className="navbar-brand" style={{ color: "#25D366" }} to="/signin">login</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar