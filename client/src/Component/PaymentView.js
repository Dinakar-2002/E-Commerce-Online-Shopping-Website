import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

 const PaymentView=()=> {
    const [Paymentdata,setPaymentData]=useState([])
    useEffect(()=>{
        getPayment();
    });

    const getPayment=async()=>{
        const result=await axios.get(`http://localhost:3001/viewPayment`);
        setPaymentData(result.data);
        console.log(result.data);
    }

    const DeletePayment=id=>{
        axios.delete(`http://localhost:3001/delpay/${id}`)
            .then(response=>{
                getPayment();
    
            });
        }
  return (
    <div>

        <div className='container-fluid mt-2'>
            <div className='row'>
                <h1>Feedback Details</h1>
                <table className='table table-bordered table-hover mt-2'>

                    <thead className='table-primary'>
                        <tr>
                            <th>#</th>
                        <th>Order Id</th>
                        <th>Order Amount</th>
                        <th>Payment Date</th>
                        <th>User Id</th>
                        <th>Transaction No</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Paymentdata.map((data,index)=>{
                                return(<tr key={data.id}>   
                                    <td>{index+1}</td>
                                    <td>{data.orderid}</td>
                                    <td>{data.order_amount}</td>
                                    <td>{data.payment_date}</td>
                                    <td>{data.userid}</td>
                                    <td>{data.transaction_no}</td>
                                     {/* //Delete button */}
                                     <td><button className='btn btn-danger' onClick={()=>DeletePayment(data.id)}>Delete</button></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
      
    </div>
  )
}

export default PaymentView
