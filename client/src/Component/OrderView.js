import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const uid=localStorage.getItem('user')
const OrderView=()=>{
    const [Orderdata,setOrderData]=useState([])
    useEffect(()=>{
        getOrder();
    },[]);

    const getOrder=async()=>{
        const result=await axios.get(`http://localhost:3001/orderview/${uid}`);
        setOrderData(result.data);
        console.log(result.data);
    }

   
    return(
        <div>
             <div className='container-fluid mt-2'>
            <div className='row'>
                <h1>Order Details</h1>
                <table className='table table-bordered table-striped table-hover mt-3'>

                    <thead className='table-primary'>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Order Date</th>
                            <th>Order Time</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                            <th colSpan={2} align='center' className='text-white bg-danger'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                      Orderdata.map((mo,index) => {
                        let message
                       

                          if(mo.paymentstatus==='Paid')
                          {
                            message = <div className='text-primary fs-4 fw-bold'> Paid  </div>
 
                          }
                          else
                          {

                            message = <div className='text-primary fs-4 fw-bold'> <a href={`/paybill/${mo.id}/${mo.total}`} 
                            style={{textDecoration:"none"}}> Pay Now </a> </div>
                          }

                          return(    
                            <tr key={index}>
                               <td>{index+1}</td>
                               <td>{mo.productname}</td>
                               <td>{mo.qty}</td>
                               <td>{mo.price}</td>
                               <td>{mo.total}</td>
                               <td>{mo.orderdate}</td>
                               <td>{mo.ordertime}</td>
                               <td className='text-success fs-4 fw-bold'>{mo.orderstatus}</td>
                               <td className='text-danger fs-4 fw-bold'>{mo.paymentstatus}</td>
                              
                               <td> {message}  </td>
                             </tr>
                         
                             )
                             }
                               )};
                    </tbody>
                </table>
            </div>
        </div>
      
        </div>
    )
}
export default OrderView




























