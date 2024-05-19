import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

 const RegView=()=> {
    const [Registerdata,setRegisterData]=useState([])
    useEffect(()=>{
        getRegister();
    });

    const getRegister=async()=>{
        const result=await axios.get(`http://localhost:3001/viewregister`);
        setRegisterData(result.data);
        console.log(result.data);
    }

    const DeleteRegister=id=>{
    axios.delete(`http://localhost:3001/delreg/${id}`)
        .then(response=>{
            getRegister();

        });
    }
  return (
    <div>

        <div className='container-fluid mt-2'>
            <div className='row'>
                <h1>Register Details</h1>
                <table className='table table-bordered table-hover mt-2'>

                    <thead className='table-primary'>
                        <tr>
                        <th>#</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Email</th>
                        {/* <th>Password</th> */}
                        <th>mobileno</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Registerdata.map((data,index)=>{
                                return(<tr key={data.id}>
                                    <td>{index+1}</td>
                                    <td>{data.fname}</td>
                                    <td>{data.lname}</td>
                                    <td>{data.dob}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.address}</td>
                                    <td>{data.pincode}</td>
                                    <td>{data.email}</td>
                                    {/* <td>{data.password}</td> */}
                                    <td>{data.mobileno}</td>
                                    {/* //Delete button */}
                                    <td><button className='btn btn-danger' onClick={()=>DeleteRegister(data.id)}>Delete</button></td>
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

export default RegView
