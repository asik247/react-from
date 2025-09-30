import React, { useRef } from 'react';

const UnControl = () => {
    const email = useRef(' ')
    const passwordRed = useRef(" ")
  
    const handle = (e)=>{
        e.preventDefault()
        console.log(email.current.value)
        console.log(passwordRed.current.value)
    }
    
    return (
        <div>
            <form onSubmit={handle}>
                <input className='border-2 p-2 rounded-2xl' ref={email} type="email" name="" placeholder='email:' /> <br />

                <input className='border-2 p-2 rounded-2xl' type="password" name="" ref={passwordRed}  placeholder='Password:' /> <br />
                <input className='border-2 p-2 my-2 rounded-2xl' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControl;