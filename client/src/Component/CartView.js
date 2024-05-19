import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'


let orderAmount=1;

console.log(orderAmount);
const uid=localStorage.getItem('user')
const CartView=()=>{

    const [Cartdata,setCartData]=useState([])
    useEffect(()=>{
        getCart();
    });

    const getCart=async()=>{
        const result=await axios.get(`http://localhost:3001/cartview/${uid}`);
        setCartData(result.data);
        console.log(result.data);
    }

    const DeleteCart=id=>{
        axios.delete(`http://localhost:3001/delcart/${id}`)
            .then(response=>{
                getCart();
            });
        }
    return(
        <div>
             <div className='container-fluid mt-2'>
            <div className='row'>
                <h1>Cart Details</h1>
                <table className='table table-bordered table-hover mt-2'>

                    <thead className='table-primary'>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Product Id</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Order Date</th>
                            <th>Order Time</th>
                            <th>Order Satus</th>
                            <th>Payment Status</th>
                            
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Cartdata.map((data,index)=>{
                                return(<tr key={data.id}>
                                    <td>{index+1}</td>
                                    <td>{data.userid}</td>
                                    <td>{data.productname}</td>
                                    <td>{data.qty}</td>
                                    <td>{data.price}</td>
                                    <td>{data.total}</td>
                                    <td>{data.orderdate}</td>
                                    <td>{data.ordertime}</td>
                                    <td>{data.orderstatus}</td>
                                    <td>{data.paymentstatus}</td>
                                     {/* //Delete button */}
                                     <td><i class="fa-solid fa-trash" onClick={()=>DeleteCart(data.id)} style={{color:"red"}}></i></td>
                                </tr>)
                            })
                        }                       
                    </tbody>
                    <tr className='bg-success'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='text-light fs-3'>₹{orderAmount=Cartdata.reduce((total,item)=>total+(item.total),0)}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                </table>
                <p className='text-center'><button className='btn btn-warning fs-5 fw-bold '><a href={`paybill_next/${orderAmount}`} style={{textDecoration:"none",color:"white"}}>place Order</a></button></p>
            </div>
        </div>
      
        </div>
    )
}
export default CartView
