import { React, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

import { Cross as Hamburger } from "hamburger-react";

import IconSearch from "../../assets/images/navbar/iconizer-icon-search-24.svg";
import IconCart from "../../assets/images/navbar/iconizer-icon-shopping-cart-24.svg";
import IconUser from "../../assets/images/navbar/iconizer-icon-user-24.svg";

function Header() {
    const [bar, setBar] = useState(false);

    // const handleClick = (e) => {
    //     if (bar) {
    //         setBar(false);
    //     }
    // };

    return (
        // <div className="header">
        <div className="header-container">
            {/* <div className="navbar"> */}
            <div className="navbar-container">
                <div className="logo-header">
                    <NavLink to="/">
                        <img
                            src={require("../../assets/images/logo/logo-fit-big.png")}
                            alt="logo"
                        />
                    </NavLink>
                </div>
                <div className="nav">
                    <div className="navbar-links-container">
                        <div className="link">
                            <NavLink>Cpu</NavLink>
                        </div>
                        <div className="link">
                            <NavLink>Gpu</NavLink>
                        </div>
                        <div className="link">
                            <NavLink>Ram</NavLink>
                        </div>
                        <div className="link">
                            <NavLink>Mainboard</NavLink>
                        </div>
                        <div className="link">
                            <NavLink>Psu</NavLink>
                        </div>
                        <div className="link">
                            <NavLink>Monitor</NavLink>
                        </div>
                    </div>
                    <div className="navbar-icons-container">
                        <div className="icons-big-screen">
                            <div className="icons">
                                <NavLink>
                                    <img src={IconSearch} alt="icon-search" />
                                </NavLink>
                            </div>
                            <div className="icons">
                                <NavLink className="icon-cart">
                                    <img src={IconCart} alt="icon-cart" />
                                </NavLink>
                            </div>
                            <div className="icons">
                                <NavLink>
                                    <img src={IconUser} alt="icon-user" />
                                </NavLink>
                            </div>
                        </div>

                        <div className="hamburger-icon">
                            <div
                                onClick={() => setBar(!bar)}
                                className={`header-bars ${
                                    bar ? "header-bars-bar" : ""
                                }`}
                            >
                                <Hamburger
                                    direction="left"
                                    duration={0.5}
                                    color="#fff"
                                    distance="sm"
                                    size={40}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
        // </div>
    );
}

export default Header;
