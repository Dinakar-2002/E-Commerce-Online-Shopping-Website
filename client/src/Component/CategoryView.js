import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const CategoryView=()=>{
    const [Categorydata,setCategoryData]=useState([])
    useEffect(()=>{
        getCategory();
    });

    const getCategory=async()=>{
        const result=await axios.get(`http://localhost:3001/viewcategory`);
        setCategoryData(result.data);
        console.log(result.data);
    }

    const DeleteCategory=id=>{
        axios.delete(`http://localhost:3001/delcat/${id}`)
            .then(response=>{
                getCategory();
    
            });
        }
    return(
        <div>
             <div className='container-fluid mt-2'>
            <div className='row'>
                <h1>Category Details</h1>
                <table className='table table-bordered table-hover mt-2'>

                    <thead className='table-primary'>
                        <tr>
                            <th>#</th>
                        <th>Category Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Categorydata.map((data,index)=>{
                                return(<tr key={data.id}>
                                    <td>{index+1}</td>
                                    <td>{data.product}</td>
                                     {/* //Delete button */}
                                     <td><button className='btn btn-danger' onClick={()=>DeleteCategory(data.id)}>Delete</button></td>

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
export default CategoryView
