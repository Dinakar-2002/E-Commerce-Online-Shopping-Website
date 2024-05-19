// import React from 'react'

// const Forgotpass = () => {
//   return (
//     <div>
//       <div className="card text-center" style={{width: "300px",margin:"auto",marginTop:"10vh"}}>
//     <div className="card-header h5 text-white bg-primary">Password Reset</div>
//     <div className="card-body px-5">
//         <p className="card-text py-2">
//             Enter your email address and we'll send you an email with instructions to reset your password.
//         </p>
//         <div className="form-outline">
//             <input type="email" id="typeEmail" className="form-control my-3" />
//             <label className="form-label" for="typeEmail">Email input</label>
//         </div>
//         <a href="/" className="btn btn-primary w-100">Reset password</a>
//         <div className="d-flex justify-content-between mt-4">
//             <a className="" href="/">Login</a>
//             <a className="" href="/">Register</a>
//         </div>
//     </div>
// </div>
//       </div>
//   )
// }

// export default Forgotpass






import axios from 'axios'
import React, { useState } from 'react'

const Forgotpass = () => {
    const[email,setEmail]=useState('')
    const[status,setStatus]=useState('')

    const handleChange = (e) =>{
        //const {name,value}= e.target
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const SubmitForgotPassword=(e)=>{
       
        //console.log(formValues.username)
        e.preventDefault();
        axios.post("http://localhost:3001/fpass",{
         email:email
        
        }).then((response)=>{
          console.log(response);
          if(response.data.length>0)
          {
            localStorage.setItem('user',email)
            window.location="http://localhost:3000/otp/"
          }
          else
          {
            setStatus('Sorry..! Invalid Email')
          }
        }) 
        .catch(error => {
          console.log(error)
      }) 
    
      }
    
  return (
    <div>
           <div className="card text-center" style={{width: "300px",margin:"auto",marginTop:"10vh"}}>
    <div className="card-header h5 text-white bg-primary">Password Reset</div>
    <div className="card-body px-5">
      <form onSubmit={SubmitForgotPassword}>

      <p className="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div className="form-outline">
            <label className="form-label">Enter Email</label>
            <input type="email"  className="form-control my-3" value={email} name='email' onChange={handleChange} />
        </div>
        <input type='submit' className='btn btn-success' value='Forgotpassword'></input>
        <div className="d-flex justify-content-between mt-4">
        </div>

      </form>
      <p className='text-danger'> {status}</p>
      <p className='text-primary'><a href='/login' style={{textDecoration:"none"}}>Go Back</a></p>
    </div>
</div>
      
    </div>
  )
}

export default Forgotpass



