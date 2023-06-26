import React, {useState} from 'react';


const Form = () => {

    let div ={
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        top: 0,
       
        

    }

    let form = {
        border: '5px solid red',
        height:'auto',
        width:'70%',
        textAlign: 'center',
    }

    let input = {
        width:'70%',
    }


    let h1 = {
        textAlign: 'center',
        color: 'red',
    }
    
    let btn = {
        position: 'relative',
        left: '40px',
        padding: '2px',
        borderRadius: '10px',
        border:'none',
        width: '70%',


    }

const[fullname, setFullname] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your input datas are Full-name: ${fullname}, Email: ${email}, Password: ${password}`);

} 

return(

    <div style={div}>
        <div></div>
    
    <form style={form} onSubmit={handleSubmit}>
        <h1 style={h1}>Form</h1>
    <label>
        Enter Full Name:
        <input style={input} type='text' placeholder='full name'
        value={fullname}
        onChange={(e)=>setFullname(e.target.value)} />
    </label>
    <br />
    <label>
        Enter Email Address:
        <input style={input} type='email' placeholder='Email address'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
    </label>
    <br /> 
    <label>
        Enter Password:
        <input style={input} type='password' placeholder='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
    </label>
    <br />
    <input style={btn} type='submit' />
</form>
</div>
)
};

export default Form;

