import React from 'react';

const Header = (props) => {
    return (
        <>
            <img src={props.source} alt="image bleu artistique" />
            <h1>{props.title}</h1>
            <h4>{props.description}</h4>
            <hr />
        </>
    )
};

export default Header;