import React from "react";
import "./TopThreeGpu.css";
import { Link } from "react-router-dom";
import VsGpu from "../../images/vs/VS-GPU.svg"

function TopThreeGpu() {
    return (
        <div className="top-three-gpu">
            <Link>
                <img src={VsGpu} alt="VsGpu" />
            </Link>
        </div>
    );
}

export default TopThreeGpu;
