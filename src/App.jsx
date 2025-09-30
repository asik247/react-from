import React from 'react';
// const handle = (e)=>{
//   e.preventDefault()
//   console.log(e.target.name.value)
//   console.log(e.target.email.value)

//   }
const App = () => {
  const handle = (e)=>{
    e.preventDefault()
    console.log(e.target.name.value)
    console.log(e.target.email.value)
  }
  return (
    <div className='font-bold text-center text-2xl'>
      <h1>React From</h1>
      {/* <form onSubmit={handle} >
        <input className='border-2' type="text" name='name' placeholder='any text:-'/> <br />
        <input className='border-2' type="email" name="email" id="" />
        <input className='border-2 my-5' type="submit" value="Submit" />
      </form> */}

        
        <form onSubmit={handle}>
          <input className='border-2 rounded-2xl p-2 my-2' type="text" name="name" id="" placeholder='your name:' /> <br />
          <input className='border-2 rounded-2xl p-2 my-2' type='email' name="email" id="" placeholder='your email:' /> <br />
          <input className='border-2 rounded-2xl my-2 p-2' type="submit" value="Submit" />
        </form>


    </div>
  );
};

export default App;