import React from 'react';

const Header = (props) => {
    return (
        <div>
            <img src={props.source} alt={props.alt} style={{ width: "100%"}} />
            <div className="pt-4 mx-auto text-center" style={{ width: "500px"}}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <hr className="border border-primary border-3 opacity-75 mb-5" />
            </div>
        </div>
    )
};

export default Header;