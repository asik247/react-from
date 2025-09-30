import React from 'react';

const FormAction = () => {
    const handle = (e)=>{
        console.log(e.get('name'))
        console.log(e.get('email'))
    }
    return (
        <div>
            <form action={handle}>
                <input  className='border-2' type="text" name="name" placeholder='name:' /> <br />

                <input  className='border-2' type="email" name="email" placeholder='email:' /> <br />

                <input className='border-2' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;