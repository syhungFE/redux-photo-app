import React from "react";
import Spinner from "assets/images/spinner-1.gif";
import "./style.scss"

const FullPageLoader = () => {
    return (
        <div className="fp-container">
            <img src={Spinner} className="fp-loader" alt="loading" />
        </div>
    );
};

export default FullPageLoader;