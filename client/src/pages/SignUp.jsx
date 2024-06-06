import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-3xl text-center font-bold mt-10'>Sign Up</h1>
      <form className='flex flex-col justify-between gap-4 mt-10'>
        <input type="text" placeholder='Username' className=' border p-3 rounded-3xl '  id='name'/>
        <input type="text" placeholder='email' className=' border p-3 rounded-3xl '  id='email'/>
        <input type="password" placeholder='password' className=' border p-3 rounded-3xl '  id='password'/>
        <button className='text-white bg-slate-700 p-3 rounded-3xl uppercase hover:opacity-95 disabled:opacity-80' > Sign Up</button>
        <button className='text-white bg-red-700 p-3 rounded-3xl uppercase hover:opacity-95 disabled:opacity-80' >Sign Up with google</button>
     
      </form>
      <div className="flex gap-2">
        <p>Have an Account?</p>
        <Link to={'/sign-in'} className='text-blue-500 hover:text-blue-700 ' >Sign In</Link>
        </div>
    </div>
  );
}
