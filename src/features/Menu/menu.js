import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './menu.css'
import logo from './vlxx_logo.png'

function Menu(props) {

    return (
        <Fragment>
            <div className="w-100 bg-dark ">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-dark ">
                        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt=""/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


            </div>
            {/*start nav*/}

            {/*end nav*/}


        </Fragment>

    );
}

export default Menu;