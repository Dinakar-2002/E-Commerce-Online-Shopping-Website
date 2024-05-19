// import React from 'react'

// const ResetPass = () => {
//   return (
//     <div>

//         <div className='container p-5' style={{width:"80vh"}}>
//             <div className='row'>
//                 <div className='card'>
//                     <div className='card-header text-center text-primary'>
//                         <h3>Reset My Password</h3>
//                     </div>

//                     <div className='card-body p-4'>
//                         <div className='d-flex p-2'>
//                             <label style={{marginTop:"4px",position:"relative"}} className='ms-4'>New password:</label>
//                             <input type='text' name='password' className='form-control' style={{width:"160px"}}  /> 
//                         </div>

//                         <div className='d-flex p-2'>
//                             <label style={{marginTop:"4px",position:"relative"}}>Confirm password:</label>
//                             <input type='text' name='password' className='form-control' style={{width:"160px"}}  /> 
//                         </div>

//                     <p><button className="btn btn-outline-success mt-2" style={{marginLeft:"28vh"}}>Reset Password</button></p>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//   )
// }
// export default ResetPass






import axios from 'axios'
import React, { useState } from 'react'

const uid=localStorage.getItem('user')
const ResetPass = () => {
    const[newpass,setNewpass]=useState('')
    const[confirmpass,setConfirmpass]=useState('')
  

    const handleChange = (e) =>{
        //const {name,value}= e.target
        setNewpass(e.target.value);  
    }

    const ResethandleChange = (e) =>{
      //const {name,value}= e.target
      setConfirmpass(e.target.value);  
  }

    const ResetFormSubmit=(e)=>{
        e.preventDefault();
        if(newpass===confirmpass)
        {
        axios.post("http://localhost:3001/rpass",{
         newpass:newpass,
         confirmpass:confirmpass,
         uid:uid
        
        }).then((response)=>{
          window.location="http://localhost:3000/login/"
          //console.log(response);
         
        }) 
        .catch(error => {
          console.log(error)
      }) 

       }

       else
       {
         alert("New password and confirm password must be same")
       }
    
      }
    
  return (
    <div>
       
       <div className='container p-5' style={{width:"80vh"}}>
            <div className='row'>
                <div className='card'>
                    <div className='card-header text-center text-primary'>
                        <h3>Reset My Password</h3>
                    </div>

                  <form onSubmit={ResetFormSubmit}>
                  <div className='card-body p-4'>
                        <div className='d-flex p-2'>
                            <label style={{marginTop:"4px",position:"relative"}} className='ms-4'>New password:</label>
                            <input type='text' name='newpass' value={newpass} className='form-control' style={{width:"160px"}} onChange={handleChange} /> 
                        </div>

                        <div className='d-flex p-2'>
                            <label style={{marginTop:"4px",position:"relative"}}>Confirm password:</label>
                            <input type='text' name='confirmpass' value={confirmpass} className='form-control' style={{width:"160px"}}  onChange={ResethandleChange} /> 
                        </div>

                    <p><button className="btn btn-outline-success mt-2" style={{marginLeft:"28vh"}} type='submit'>Reset Password</button></p>

                    </div>
                  </form>

                </div>
            </div>
        </div>

      
    </div>
  )
}

export default ResetPass
