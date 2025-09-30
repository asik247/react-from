import React from 'react';
import UseInputFiels from '../HookForm/UseInputFiels';


const Hook = () => {
    const [name,onChangeName]= UseInputFiels('');

    const handle = (e)=>{
        e.preventDefault();
        console.log(name)
    }
    

    return (
        <div>
          <form onSubmit={handle} >
            <input type="text" defaultValue={name} onChange={onChangeName} name="name" placeholder='name' /> <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
};

export default Hook;