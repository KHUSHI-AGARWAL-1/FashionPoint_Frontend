import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from'axios';
import toast from 'react-hot-toast';
function Signup() {
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/"
  const navigate= useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    const userInfo= {
      name:data.name,
      email:data.email,
      password:data.password
    }
   await axios.post("https://fashionpoint-sr7i.onrender.com/users/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Signup Successfull!');
        navigate("/")
        window.location.reload()
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response)
      console.log(err+" signup")
      toast.error("Error: " + err.response.data.msg);
    })
    // console.log(data);
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className='w-[600px]'>
          <div className='modal-box'>
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">SignUp</h3>
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-4 space-y-2'>
                <span>Name:</span> <br />
                <input
                  type="text"
                  placeholder='Enter your FullName'
                  className={`w-80 py-1 px-3 border rounded-md outline-none ${errors.name ? 'border-red-500' : ''}`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Email:</span> <br />
                <input
                  type="email"
                  placeholder='Enter your Email'
                  className={`w-80 py-1 px-3 border rounded-md outline-none ${errors.email ? 'border-red-500' : ''}`}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className='mt-4 space-y-2'>
                <span>Password:</span> <br />
                <input
                  type="password"
                  placeholder='Enter your password'
                  className={`w-80 py-1 px-3 border rounded-md outline-none ${errors.password ? 'border-red-500' : ''}`}
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              <div>
                <button type="submit" className="btn bg-pink-800 text-white mt-4 hover:bg-pink-500 hover:text-black">SignUp</button>
              </div>
            </form>
            <p className='mt-4'>
              Already have an account? <button className='text-blue-500 underline' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>
              <Login />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
