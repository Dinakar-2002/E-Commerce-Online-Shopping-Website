import React from 'react'
import { useParams} from 'react-router-dom';
import axios from "axios";
import pay from "../Assets/creditcard.png"

let uid=localStorage.getItem('user');
const PayBill = () => {
    const {id} = useParams();
    const {price} = useParams();
    console.log(id)
    console.log(price)

    const paymentHandler = async (e) => {
        e.preventDefault();

        var options={
          key:"rzp_test_JShfrRjLn6u2gW",
          key_secret:"HDktISQLWnpcvBikj2gPaNxf",
          amount:price*100,
          currency:"INR",
          name:"E-Commerce Shopping Cart",
          description:"For testing purpose",
          handler:function(response){
            // alert(response.razorpay_payment_id)
            axios.post(`http://localhost:3001/paybill/${id}`,{
              price:price,
              payment_id:response.razorpay_payment_id,
              uid:uid
             }).then((response)=>{
               console.log(response);
               alert("Payment has been done successfully")
               window.location="http://localhost:3000/myorder"
             })
             .catch(error => {
                 console.log(error)
             })
          },
          prefill:{
            name:"Dinakar",
            email:"dinakarnaik33@gmail.com",
            contact:"6361206455",
          },

          notes:{
            address:"Razorpay Corporate Office",
          },
          theme:{
            color: "#686CFD",
          }
        };
        var pay=new window.Razorpay(options);
        pay.open()

       
  };
    
  return (
    <div className='mt-2'>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1> Pay Order Bill Amount </h1>
                    <button onClick={paymentHandler} className='btn btn-primary' style={{width:"200px"}}>Pay Now</button>
                </div>

                <div className='col-lg-6'>
                    <p> <img src={pay} style={{width:"350px",height:"350px"}} alt='not found' /></p>
                </div>
            </div>
        </div>
    </div> 

  )
}

export default PayBill
