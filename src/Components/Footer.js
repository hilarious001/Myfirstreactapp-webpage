import React from 'react';

const Footer = () => {
    let footer={
        backgroundColor:'aqua',
        height:'161px',
    };

    let list = {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        
    }

    let list_link = {
        listStyle: 'none',
        textDecoration: 'none',color:'black' 

    }

    let footer_space = {
        position: 'relative',
        top: '-20px',
        textAlign: 'center',
        textTransform: 'capitalize',
        position: 'relative',
        top: 0,
    }


    return(
        <div style={footer}>
            <ul style={list}>
                <li><a style={list_link} href='#'>Home</a></li>
                <li><a style={list_link} href='#'>About</a></li>
                <li><a style={list_link} href='#'>Blog</a></li>
            </ul>
            <div style={footer_space}>
                <span>&copy;all rights reserved </span>
                <h2>designer: ukwuani chinonso hilary </h2>
            </div>
         </div>
    )
}


export default Footer;