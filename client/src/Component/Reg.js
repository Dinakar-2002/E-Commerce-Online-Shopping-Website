// import React from 'react'
import axios from 'axios'
import React,{useState} from 'react'
function Reg() {

  const initialValues={fname:"",lname:"",dob:"",gender:"",address:"",pincode:"",email:"",password:"",mobileno:""}
  const [formValues,setFormvalues]=useState(initialValues)

  const handlechange=(e)=>{
    const {name,value}=e.target
    setFormvalues({...formValues,[name]:value});
    console.log(formValues.fname);
  }
  const FormReg=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/register",{
   feeddata:formValues
      // uid:uid
    }).then((response)=>{
      console.log(response);
      alert("Registration Successfull")
      //window.location='http://localhost:3000
    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <div>
     <section className="vh-100">
  <div className="mask d-flex align-items-center h-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b>RegistrationForm</b></h2>
              <hr></hr>

              <form onSubmit={FormReg}>

            
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3cg"><b>FirstName</b></label>
                  <input type="text" id="form3Example3cg" className="form-control form-control-lg" name='fname' value={formValues.fname}   onChange={handlechange} required />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example4cg"><b>LastName</b></label>
                  <input type="text" id="form3Example4cg" className="form-control form-control-lg" name='lname' value={formValues.lname} onChange={handlechange} required/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>DOB</b></label>
                  <input type="date" id="form3Example4cdg" className="form-control form-control-lg" name='dob' value={formValues.dob} onChange={handlechange} required/>
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Genders</b></label>
               <span style={{marginLeft:"15px",fontWeight:"bold"}}>Male</span>
               <input type="radio" className="form-check-input"  style={{marginLeft:"4px"}} name='gender' value="male"  checked={formValues.gender==="male"} onChange={handlechange} />
               <span style={{marginLeft:"10px",fontWeight:"bold"}}>Female</span>
               <input type="radio" className="form-check-input" name='gender' value="female" checked={formValues.gender==="female"} onChange={handlechange}/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Adress</b></label>  
                <textarea className='form-control' name='address'  onChange={handlechange} defaultValue={formValues.address} required></textarea>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Pincode</b></label>
                  <input type="password" className="form-control form-control-lg"name='pincode' value={formValues.pincode} onChange={handlechange} required />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Email</b></label>
                  <input type="email" className="form-control form-control-lg" name='email' value={formValues.email} onChange={handlechange} required />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Password</b></label>
                  <input type="password" className="form-control form-control-lg" name='password' value={formValues.password}   onChange={handlechange} required/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Mobile No.</b></label>
                  <input type="Number" className="form-control form-control-lg" name='mobileno' value={formValues.mobileno}   onChange={handlechange} required />
                </div>

            

                <div className="d-flex justify-content-center">
                  <button className="btn" type='submit' style={{width:"170px", height:"40px",border:"2px solid silver",fontWeight:"bold",
                     boxShadow:"2px 3px 4px 2px  silver ",borderRadius:"3%"}}>Register</button>
                </div>

                

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Reg
