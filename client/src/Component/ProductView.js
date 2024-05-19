import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

 const ProductView=()=> {
    const [Productdata,setProductData]=useState([])
    useEffect(()=>{
        getProduct();
    });

    const getProduct=async()=>{
        const result=await axios.get(`http://localhost:3001/viewProduct`);
        setProductData(result.data);
        console.log(result.data);
    }

    const DeleteProduct=id=>{
        axios.delete(`http://localhost:3001/delpro/${id}`)
            .then(response=>{
                getProduct();
    
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
                        <th>category</th>
                        <th>productname</th>
                        <th>qty</th>
                        <th>uom</th>
                        <th>price</th>
                        <th>stock</th>
                        <th>image</th>
                        <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Productdata.map((data,index)=>{
                                return(<tr key={data.id}>
                                    <td>{index+1}</td>
                                    <td>{data.category}</td>
                                    <td>{data.productname}</td>
                                    <td>{data.qty}</td>
                                    <td>{data.uom}</td>
                                    <td>{data.price}</td>
                                    <td>{data.stock}</td>
                                    <td>{data.image}</td>
                                    <td style={{width:'200px',textAlign:"justify"}}>{data.description}</td>
                                     
                                    {/* //Delete button */}

                                    <td><img src={`../Upload/${data.image}`} alt='not found' width={100} height={100}></img></td>


                                     <td><button className='btn btn-danger' onClick={()=>DeleteProduct(data.id)}>Delete</button></td>
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

export default ProductView
