// import React, { useState } from 'react';
import React, { useState } from "react";

const ControlField = () => {

    const onSubmitHandle = (e)=>{
        e.preventDefault()
        if(password.length<6){
            setError("plaes requer")
        } else{
            setError("")
        }
    }
    const [error,setError] = useState('')
    const [password,setPassword] = useState("");
    const ControlHandle = (e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
        // if(password.length <6){
        //     setError("password must be 6 charecter")
        // }else{
        //     setError("")
        // }
    }


    
    return (
        <div>
         <form onSubmit={onSubmitHandle}>
            <input className='border-2 p-2 rounded-2xl' type="email" name="email"  placeholder='email' /> <br /><br />

            <input className='border-2 p-2 rounded-2xl' type="password" name="password" onChange={ControlHandle} defaultValue={password} placeholder='password' /> <br /><br />

            <input className='border-2 rounded-2xl p-2' type="submit" value="Submit" />
         </form>
          <p style={{color:'red'}}>
            <small>{error}</small>
          </p>
        </div>
    );
};

export default ControlField;