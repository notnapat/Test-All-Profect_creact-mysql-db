import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import IconNav from "../IconNav/IconNav";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="container-header">
            <div className="container">
                <div className="con-navbar">
                    <div className="con-logo">
                        <Link>
                            <img
                                // src={require("../../images/logo/comshop.png")}
                                // alt="logo"
                                src={require("../../images/logo/logo-fit-big.png")}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="con-nav-flex">
                        <Navbar />
                    </div>
                    <div className="con-icon">
                        <IconNav />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
