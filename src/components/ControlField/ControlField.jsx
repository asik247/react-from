// import React, { useState } from 'react';
import React, { useState } from "react";

const ControlField = () => {

    const onSubmitHandle = (e)=>{
        e.preventDefault()
    }
    const [password,setPassword] = useState("");
    const ControlHandle = (e)=>{
        console.log(e.target.value)
    }


    
    return (
        <div>
         <form onSubmit={onSubmitHandle}>
            <input className='border-2 p-2 rounded-2xl' type="email" name="email" id="" placeholder='email' /> <br /><br />

            <input className='border-2 p-2 rounded-2xl' type="password" name="password" id="" onChange={ControlHandle} defaultValue={password} placeholder='password' /> <br /><br />

            <input className='border-2 rounded-2xl p-2' type="submit" value="Submit" />
         </form>
        </div>
    );
};

export default ControlField;