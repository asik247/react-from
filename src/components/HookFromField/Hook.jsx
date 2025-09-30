import React from 'react';
import UseInputFiels from '../HookForm/UseInputFiels';

const Hook = () => {

    const [name,nameOnChange] = UseInputFiels('')
    const [email,emailOnChange] = UseInputFiels('')

    const handle = (e)=>{
        e.preventDefault();
        console.log(name,email)
    }

    return (
        <div>
            <form onSubmit={handle} >
                <input className='border-2 p-2 rounded-2xl my-5' type="text" name="name" defaultValue={name} onChange={nameOnChange} placeholder='name' />
                <br />

                <input className='border-2 p-2 rounded-2xl my-5' type="email" name="name" defaultValue={email} onChange={emailOnChange} placeholder='email' />
                <br />

                <input className='border-r rounded-2xl p-2 my-4' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hook;