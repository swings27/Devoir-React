import React from 'react';

const Header = (props) => {
    return (
        <>
            <img src={props.source} alt={props.alt} />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <hr />
        </>
    )
};

export default Header;