// import React from 'react'

// const RegistrationForm = () => {

//   const initialValues={fname:"",lname:"",dob:"",gender:"",address:"",pincode:"",email:"",password:"",mobileno:""}
//   const [formValues,setFormvalues]=useState(initialValues)

//   const handlechange=(e)=>{
//     const {name,value}=e.target
//     setFormvalues({...formValues,[name]:value});
//     console.log(formValues.userid);
//   }
//   const FormFeedback=(e)=>{
//     e.preventDefault();
//     axios.post("http://localhost:3001/registration",{
//    feeddata:formValues
//       // uid:uid
//     }).then((response)=>{
//       console.log(response);
//       alert("Registration Completed")
//       //window.location='http://localhost:3000
//     })
//     .catch(error=>{
//       console.log(error);
//     })
//   }

//   return (
//     <div>
//        <div className="container ">
// 		<div className="row justify-content-center ">
// 			<div className="col-lg-6 bg-white">
// 				<h3 className="mt-4 text-center fw-bold mb-4" >Login</h3>
// 				<input type="text" name="t1" className="border border-2 border-info" 
//                 placeholder="User Name" style={{width:'470px',height:'44px',borderRadius:'5px',
//                 marginLeft :'30px'}}/>

// 				<input type="text" name="t1"  className="border border-2 border-info"
//                  placeholder="Password" style={{width:'470px',height: '44px',borderRadius: '5px',
//                  marginLeft: '30px', marginTop:'20px'}}/>

// 				<p><input type="checkbox" name="t3" style={{marginLeft:'35px', marginTop: '20px'}}/>
//                  Remember Me  <span className="text-danger fw-bold  mt-3"
//                   style={{marginLeft:'200px'}}>Forgot Password?</span></p>

// 				<p><button className="btn-btn bg-info text-center text-white"
//                  style={{width: '120px',height: '40px', borderRadius:'10px',marginLeft: '220px',
//                   border: 'none'}} >Log in</button></p>
// 				<hr/>

// 				<h4 className="fw-bold text-center">Login</h4>
// 				<p className="fw-bold text-center">With your social media account</p>

// 				<button className="text-white text-center fw-bold m-4"
//                  style={{width:'140px',height:'45px',backgroundColor: 'purple',borderRadius: '10px',
//                  border:'none'}}><i className="fa-brands fa-twitter m-2"></i>Twitter</button>

// 				<button className="text-white text-center fw-bold m-3" style={{width:'140px',
//                 height:'45px',backgroundColor: 'blue',borderRadius:'10px',border:'none'}}>
//                     <i className="fa-brands fa-facebook-f m-2"></i>Facebook</button>

// 				<button className="text-white text-center fw-bold m-3" 
//                 style={{width:'140px',height:'45px',backgroundColor:'orangered',
//                 borderRadius: '10px',border:'none'}}><i className="fa-brands fa-google-plus-g m-2">
//                     </i>Google+</button>

// 				<hr/>
// 				<p className="fw-bold text-center">Don't have an Account? <span className="text-danger">
//                     Register Now!</span></p>


// 				<button className="text-white text-center mb-2 bg-info"
//                  style={{width:'140px',height:'45px',backgroundColor:'orangered',borderRadius:'10px',
//                  border:'none',marginLeft:'200px'}}>REGISTER</button>
// 			</div>
// 		</div>
		
// 	</div>
		
// 	</div>      
//   )
// }

// export default RegistrationForm

