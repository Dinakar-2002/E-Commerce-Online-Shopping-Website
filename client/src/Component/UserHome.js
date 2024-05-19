import React, { useEffect, useState } from 'react'
import axios from 'axios';


import flip1 from "../Assets/flip1.jpg"
import flip2 from "../Assets/flip2.jpg"
import flip3 from "../Assets/flip3.jpg"
import flip4 from "../Assets/flip4.jpg"
// import a1 from "../Assets/a7.png"
// import a5 from "../Assets/hp10.jpeg"
// import a3 from "../Assets/a3.png"
// import a4 from "../Assets/a8.png"


function Userhome() {
    const uid=localStorage.getItem('user')
    ///to get the product automatically from product
    const [ProductList,setProductList]=useState([])
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=async()=>{
        const result=await axios.get("http://localhost:3001/viewProduct");
        setProductList(result.data);
        console.log(result.data);
    };

    const AddCart= id =>{
        //alert(id)
        axios.post(`http://localhost:3001/addcart/${id}/${uid}`,{
        }).then((response)=>{
            console.log(response);
            alert("Add to Cart To Successfully");
            window.location="http://localhost:3000/uhome"
        })
        .catch(error=>{
            console.log(error);
        })
    }

// //
    return (
        <div>
            <div id="slider" className="carousel slide mt-3" data-bs-ride="carousel"
                style={{ marginLeft: "10px", marginRight: "10px" }}>
                <div className="carousel-indicators"><button type="button" data-bs-target="#slider" data-bs-slide-to="0"
                    className="active"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#slider" data-bs-slide-to="3"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className='col-lg-12'>
                            <img src={flip1}  alt='login' 
                            style={{ width: "100%", height: "350px", backgroundSize: "100%" }}></img></div>
                    </div>

                    <div className="carousel-item ">
                        <div className='col-lg-12'>
                            <img src={flip2} width={600} height={400} alt='login'
                             style={{ width: "100%", height: "350px", backgroundSize: "100%" }}></img></div>
                    </div>

                    <div className="carousel-item ">
                        <div className='col-lg-12'>
                            <img src={flip3}  alt='login'
                             style={{ width: "100%", height: "350px", backgroundSize: "100%" }}></img></div>
                    </div>



                    <div className="carousel-item ">
                        <div className='col-lg-12'>
                            <img src={flip4}  alt='login' 
                            style={{ width: "100%", height: "350px", backgroundSize: "100%" }}></img></div>
                    </div>
                </div>



                <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>
            <h1 className='text-center mt-3' style={{color:"red",fontFamily:"Fantasy"}}>Our Products</h1>
            <hr></hr>
            <div class="container-fluid ">
                <div class="row">
                        {
                            ProductList.map((data,index)=>{
                                return(
                            // })//
                    <div class="col-lg-3 text-center" key={data.id}>
                        <h5>{data.productname}</h5>
                        <p><img src={`../Upload/${data.image}`} alt='not found' width={200} height={200} ></img></p>
                        <p>₹ {data.price}/-</p>
                        <p><button className='btn btn-light fw-bold text-dark' style={{width:"120px",fontSize:"14px",margin:"4px",backgroundColor:"#FFEE58 "}} 
                        onClick={()=>AddCart(data.id)}>Add Cart</button>
                        <button className='btn  fw-bold text-dark' style={{width:"120px",fontSize:"14px",backgroundColor:"orange"}} >
                    <a href={`/qty/${data.id}`} style={{textDecoration:"none",color:"black"}}>Buy Now</a></button></p>
                     
                    </div>)
                         }
                    )}
                </div>
            </div>

        </div>
    )
}

export default Userhome;














// //Buy Now
// const BuyNow=id=>{
//     axios.post(`http://localhost:3001/buyorder/${id}/${uid}`,{
//     }).then((response)=>{
//         console.log(response);
//         alert("Happy Buy");
//         window.location="http://localhost:3000/qty"
//     })
//     .catch(error=>{
//         console.log(error);
//     })
// }


