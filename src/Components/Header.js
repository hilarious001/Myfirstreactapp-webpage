import React from 'react';
import logo from '../images/logo192.png';

const Header = () => {
    let header={
        backgroundColor:'aqua',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50px',
    };

    let list = {
        display: 'flex',
        listStyle: 'none',
        
        
    }

    let list_link = {
        textDecoration: 'none', 
        marginRight: '20px',
        color:'black'
    }

    let image_size = {
        width: '2vw',
    }


    return(
        <>
        <div style={header}>
             <img style={image_size} src={logo} alt='logo' />
            <ul style={list}>
                <li><a style={list_link} href='#'>Home</a></li>
                <li><a style={list_link} href='#'>About</a></li>
                <li><a style={list_link} href='#'>Blog</a></li>
            </ul>
        </div>
        </>
    )
}


export default Header;