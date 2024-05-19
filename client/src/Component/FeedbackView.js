import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

 const FeedbackView=()=> {
    const [Feedbackdata,setFeedbackData]=useState([])
    useEffect(()=>{
        getFeedback();
    });

    const getFeedback=async()=>{
        const result=await axios.get(`http://localhost:3001/viewfeedback`);
        setFeedbackData(result.data);
        console.log(result.data);
    }

    const DeleteFeedback=id=>{
    axios.delete(`http://localhost:3001/delfed/${id}`)
        .then(response=>{
            getFeedback();

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
                        <th>Category</th>
                        <th>pid</th>
                        <th>aboutproduct</th>
                        <th>aboutservice</th>
                        <th>suggetions</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Feedbackdata.map((data,index)=>{
                                return(<tr key={data.id}>
                                    <td>{index+1}</td>
                                    <td>{data.userid}</td>k
                                    <td>{data.pid}</td>
                                    <td>{data.aboutproduct}</td>
                                    <td>{data.aboutservice}</td>
                                    <td>{data.suggetions}</td>
                                    {/* //Delete button */}
                                    <td><button className='btn btn-danger' onClick={()=>DeleteFeedback(data.id)}>Delete</button></td>
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

export default FeedbackView
