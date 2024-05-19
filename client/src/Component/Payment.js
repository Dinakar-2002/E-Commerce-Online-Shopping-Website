// import React from 'react'
import axios from 'axios'
import React,{useState} from 'react'



const Payment=()=> {

  const initialValues={orderid:" ",userid:" ",totalamount:" ",paiddate:" "}
  const [formValues,setFormvalues]=useState(initialValues)

  const handlechange=(e)=>{
    const {name,value}=e.target
    setFormvalues({...formValues,[name]:value});
    console.log(formValues.userid);
  }

  const FormPayment=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/payment",{
      feeddata:formValues

    }).then((response)=>{
      console.log(response);
      alert("Payment successfull Thank you")
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
          <div className="card" style={{borderRadius:"15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b>PAYMENT</b></h2>
              <hr></hr>

              <form onSubmit={FormPayment}>

            
                <div className="form-outline mb-4">
                  <label className="form-label"><b>Order Id</b></label>
                  <input type="int"  className="form-control form-control-lg" name='orderid'
                  value={formValues.orderid} onChange={handlechange} required/>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>User Id</b></label>
                  <input type="text" className="form-control form-control-lg"  name='userid'
                   value={formValues.userid} onChange={handlechange} required/>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>Total Amount</b></label>
                  <input type="text"  className="form-control form-control-lg"  name='totalamount'
                   value={formValues.totalamount} onChange={handlechange} required />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Paid Date</b></label>
                  <input type="date"  className="form-control form-control-lg"   name='paiddate'
                   value={formValues.paiddate} onChange={handlechange} required/>
                </div>
                
                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="text-body  btn" style={{width:"170px", height:"40px",
                    border:"2px solid silver",fontWeight:"bold",
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

export default Payment
