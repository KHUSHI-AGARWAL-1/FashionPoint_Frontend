import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authuser,setauth]=useAuth()
    const handlelogout=()=>{
        try {
            setauth({
                ...authuser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("LoggedOut Successfully")
            setTimeout(()=>{
        
                window.location.reload();
              },1000)
        } catch (error) {
            toast.error("Error: "+ error.message)
            setTimeout(()=>{},3000)
        }
    }
  return (
    <div>
        <button className="btn bg-black text-white p-2 rounded-md hover:bg-slate-700 cursor-pointer px-3 py-3" onClick={handlelogout}>LogOut
        </button>
    </div>
  )
}

export default Logout