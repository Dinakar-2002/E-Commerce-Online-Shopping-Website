import axios from 'axios'
import {React,useState} from 'react'
import {useParams} from 'react-router-dom';

// console.log("Item id:"+id);
let uid=localStorage.getItem('user');

const Qty=()=>{
    const [qty,setQty]=useState(1);

   const {id}=useParams();


   const handleChange=(e)=>{
    setQty(e.target.value);
    console.log(e.target.value)
   }

   const SendQty=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:3001/buyorder/${id}`,{
        qty:qty,
        id:id,
        uid:uid
    }).then((response)=>{
        console.log(response);
        alert("order haas been placed successfully");
        window.location="http://localhost:3000/uhome"
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
              <h2 className="text-uppercase text-center mb-5"><b>QUANTITY</b></h2>
              <hr></hr>
              <form  onSubmit={SendQty}>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>Quantity</b></label>
                  <input type="text" className="form-control form-control-lg"
                   name='qty'value={qty} onChange={handleChange} min={1}/>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn" style={{width:"170px", height:"40px",
                    border:"2px solid silver",fontWeight:"bold",
                     boxShadow:"2px 3px 4px 2px  silver ",borderRadius:"3%"}}>Submit</button>
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


export default Qty;



// const initialValues={qty:""};
// const[formValues,setFormvalues]=useState(initialValues)

// const handlechange=(e)=>{
//   const {name,value}=e.target
//   setFormvalues({...formValues,[name]:value});
//   console.log(formValues.qty);
// }

// const FormQty=(e)=>{
//   e.preventDefault();
//   axios.post("http://localhost:3001/buynow",{
//  feeddata:formValues  
//     // uid:uid
//   }).then((response)=>{
//     console.log(response);
//     alert("Thanks for the Buy")
//     //window.location='http://localhost:3000
//   })
//   .catch(error=>{
//     console.log(error);
//   })
// }