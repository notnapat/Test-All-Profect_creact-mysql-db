import React from "react";
import "./IconNav.css";
import { Link } from "react-router-dom";
import IconSearch from "../../images/icons/iconizer-icon-search-24.svg";
import IconCart from "../../images/icons/iconizer-icon-shopping-cart-24.svg";
import IconUser from "../../images/icons/iconizer-icon-user-24.svg";
import IconHamberger from "../../images/icons/iconizer-icon-hamberger-menu.svg"

function IconNav() {
    return (
        <div className="con-icon-nav">
            {/* <img src={require("../../images/icons/octicon_search-24.png")} alt="icon-search" /> */}
            {/* <img src={require("../../images/icons/shopping-cart-24.png")} alt="icon-cart" /> */}
            {/* <img src={require("../../images/icons/icon-user-24.png")} alt="icon-user" /> */}
            <Link>
                <img src={IconSearch} alt="icon-search" />
            </Link>
            <Link className="icon-cart">
                <img src={IconCart} alt="icon-cart" />
            </Link>
            <Link >
                <img src={IconUser} alt="icon-user" />
            </Link>
            <Link className="icon-hamberger">
                <img src={IconHamberger} alt="" />
            </Link>
        </div>
    );
}

export default IconNav;
