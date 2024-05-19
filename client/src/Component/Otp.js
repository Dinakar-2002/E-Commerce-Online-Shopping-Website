import axios from 'axios'
import React, { useState } from 'react'

const Otp = () => {
    const[otp,setOtp]=useState('')
    const[status,setStatus]=useState('')

    const handleChange = (e) =>{
        //const {name,value}= e.target
        setOtp(e.target.value);
        console.log(e.target.value)
    }

    const SubmitOtp=(e)=>{
       
        //console.log(formValues.username)
        e.preventDefault();
        axios.post("http://localhost:3001/otp",{
         otp:otp
        
        }).then((response)=>{
          console.log(response);
          if(response.data.length>0)
          {
           
            window.location="http://localhost:3000/rpass/"
          }
          else
          {
            setStatus('Sorry..! Invalid Otp')
          }
        }) 
        .catch(error => {
          console.log(error)
      }) 
    
      }
    
  return (
    <div>
   
   <section className="container-fluid  d-block">
  <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-5" style={{minWidth: "500px"}}>
        <div className="card bg-white mb-5 mt-5 border-0" style={{boxShadow:" 0 12px 15px rgba(0, 0, 0, 0.02)"}}>
          <div className="card-body p-5 text-center">
            <form onSubmit={SubmitOtp}>
            <h4>Verify</h4>
            <p>Your code was sent to you via email</p>

            <div className="otp-field mb-4">
              <label> Enter OTP</label>
            <input type="number" value={otp} name='otp' className="form-control my-3" onChange={handleChange} />
            </div>

            <button type='submit'  className="btn btn-primary mb-3">
              Verify OTP
            </button>

            <p className="resend text-muted mb-0">
              Didn't receive code? <a href="/">Request again</a>
            </p>
            </form>
            <p className='text-danger'> {status}</p>
          </div>
        </div>
      </div>
    </div>
</section>

    </div>
  )
}

export default Otp










// <section className="container-fluid  d-block">
// <div className="row justify-content-center">
//     <div className="col-12 col-md-6 col-lg-5" style={{minWidth: "500px"}}>
//       <div className="card bg-white mb-5 mt-5 border-0" style={{boxShadow:" 0 12px 15px rgba(0, 0, 0, 0.02)"}}>
//         <div className="card-body p-5 text-center">
//          <form onSubmit={SubmitOtp}>

//          <h4>Verify</h4>
//           <p>Your code was sent to you via email</p>

//           <div className="otp-field mb-4" style={{display:"flex",justifyContent:"space-around"}}>
//             <input type="number" style={{width:"80px"}}  value={otp} name='otp' onChange={handleChange}/>
//           </div>

//           <button className="btn btn-primary mb-3">
//             Verify
//           </button>

//           <p className="resend text-muted mb-0">
//             Didn't receive code? <a href="/">Request again</a>
//           </p>

//          </form>
//          <p className='text-danger'>{status}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>




























// import React from 'react'

// const Otp = () => {
//   return (
//     <div>
//       <section className="container-fluid bg-body-tertiary d-block">
//   <div className="row justify-content-center">
//       <div className="col-12 col-md-6 col-lg-4" style={{minWidth: "500px"}}>
//         <div className="card bg-white mb-5 mt-5 border-0" style={{boxShadow:" 0 12px 15px rgba(0, 0, 0, 0.02)"}}>
//           <div className="card-body p-5 text-center">
//             <h4>Verify</h4>
//             <p>Your code was sent to you via email</p>

//             <div className="otp-field mb-4" style={{display:"flex",justifyContent:"space-around"}}>
//               <input type="number" style={{width:"40px"}} />
//               <input type="number" disabled style={{width:"40px"}} />
//               <input type="number" disabled style={{width:"40px"}}  />
//               <input type="number" disabled style={{width:"40px"}} />
//               <input type="number" disabled style={{width:"40px"}} />
//               <input type="number" disabled style={{width:"40px"}} />
//             </div>

//             <button className="btn btn-primary mb-3">
//               Verify
//             </button>

//             <p className="resend text-muted mb-0">
//               Didn't receive code? <a href="/">Request again</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
// </section>
//     </div>
//   )
// }
// export default Otp