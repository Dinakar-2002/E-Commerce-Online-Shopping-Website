// import React from 'react'
import axios from 'axios'
import React,{useState} from 'react'

const Feedback=()=> {

  const initialValues={userid:"",pid:"",aboutproduct:"",aboutservice:"",suggetions:""}
  const [formValues,setFormvalues]=useState(initialValues)

  const handlechange=(e)=>{
    const {name,value}=e.target
    setFormvalues({...formValues,[name]:value});
    console.log(formValues.userid);
  }
  const FormFeedback=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/feedback",{
   feeddata:formValues
      // uid:uid
    }).then((response)=>{
      console.log(response);
      alert("thank you for your feedback")
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
              <h2 className="text-uppercase text-center mb-5"><b>FEEDBACK</b></h2>
              <hr></hr>

              <form onSubmit={FormFeedback}>

                <div className="form-outline mb-4">
                  <label className="form-label" >
                    <b>User Id</b></label>
                  <input type="text" className="form-control form-control-lg" name='userid' value={formValues.userid}   onChange={handlechange} required/>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" ><b>P_Id</b></label>
                  <input type="number"  className="form-control form-control-lg" value={formValues.pid} name='pid'  onChange={handlechange} required/>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" ><b>About product</b></label>
                  <input type="text"  className="form-control form-control-lg" value={formValues.aboutproduct} name='aboutproduct'  onChange={handlechange} required />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label"><b>About service</b></label>
                  <input type="text" className="form-control form-control-lg" value={formValues.aboutservice} name='aboutservice'  onChange={handlechange} required/>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>Suggestions</b></label>
                  <input type="text"  className="form-control form-control-lg" value={formValues.suggetions} name='suggetions' onChange={handlechange} required/>
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

export default Feedback
