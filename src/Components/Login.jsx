import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from'axios';
import toast from 'react-hot-toast';
function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    const userInfo= {
      email:data.email,
      password:data.password
    }
   await axios.post("https://fashionpoint-sr7i.onrender.com/users/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Login Successfull!')
        document.getElementById("my_modal_3").close()
        setTimeout(()=>{
        
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        },1000)
       
      }
   
    }).catch((err)=>{
      if(err.response){
        console.log(err+" signup")
        toast.error("Error: " + err.response.data.msg);
    setTimeout(()=>{},3000)
      }
     
    })
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> */}
          <h3 className="font-bold text-lg">Login</h3>
       <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
  <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>

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
              <button type="submit" className="btn bg-pink-800 text-white mt-4 hover:bg-pink-500 hover:text-black">Login</button>
            </div>
          </form>
          <p className="mt-4">
            Do not have an account? <Link to="/signup" className='text-blue-500 underline'>SignUp</Link>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
