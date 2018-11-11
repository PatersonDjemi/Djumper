import React from "react";

const SideBlock = ({ title, children }) => {
    return (
        <div className="sideBar__block">
            { title ? ( <div className="sideBar__block__title">
                { title } </div> ) : null }
            { children }
        </div> 
    );
}

export default SideBlock;