import React from "react"
import { Link, useNavigate } from "react-router-dom";

function NavBar({isLoggedIn,setIsLoggedIn}){
    let navigate = useNavigate();

    function handleLogout() {
        setIsLoggedIn(false);
    }
    function handleLogin() {

        setIsLoggedIn(true)
        navigate("/home");
    }
    console.log(isLoggedIn)
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto ms-2 mt-2">

                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                </ul>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {isLoggedIn?(
                    <li className="nav-item">
                    <Link className="nav-link" to='/' onClick={handleLogout}>Log out</Link>
                    </li>
                    ):(
                        <li className="nav-item">
                        <Link className="nav-link" to="/home" onClick={handleLogin}>Login</Link>
                    </li>
                        )}
                
                </ul>
            </div>
        </div>
        </nav>

        </div>
    )
}

export default NavBar;