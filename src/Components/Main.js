import React from 'react';
import Form from './Form';


const Main = () => {
    let main={
        backgroundColor:'#ccc',
        height:'500px',
    };

    let list = {
        justifyContent: 'space-between',
        alignItems: 'center',  
    }

    let list_link = {
        textDecoration: 'none', 
    }

    let text_space = {
        textAlign: 'center',
        textTransform: 'capitalize',
    }


    return(
        <>
        <div style={main}>
            <h1 style={text_space}>My Potfoilio <br></br>Website</h1>
            <h2 style={{marginLeft:'30px', fontSize:'30px',}}>Skills</h2>
            <ul style={list}>
                <li style={list_link}>java</li>
                <li style={list_link}>python</li>
                <li style={list_link}>php</li>
                <li style={list_link}>react</li>

            </ul>


            <Form />
        </div>
        </>  
    )
    }


export default Main;