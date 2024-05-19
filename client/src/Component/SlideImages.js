import React from 'react'
import f1 from "../Assets/flip1.jpg"
import f2 from "../Assets/flip2.jpg"
import f3 from "../Assets/flip3.jpg"
import f4 from "../Assets/flip4.jpg"
import laptop3 from "../Assets/laptop3.png"
import laptop2 from "../Assets/laptop2.png"
import laptop4 from "../Assets/laptop4.png"
import laptop5 from "../Assets/laptop5.png"



const SlideImages = () => {
  return (
    <div>
      
      <div id="slider" className="carousel slide mt-3" data-bs-ride="carousel"
       style={{marginLeft:"10px",marginRight: "10px"}}>
        <div className="carousel-indicators"><button type="button" data-bs-target="#slider" data-bs-slide-to="0"
                className="active"></button>
            <button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#slider" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#slider" data-bs-slide-to="3"></button>
        </div>

        <div className="carousel-inner">

            <div className="carousel-item active">
            <div className='col-lg-12'>
    <p><img src={f1}  alt='login' style={{width:"100%",height:"350px",backgroundSize:"100%"}}></img></p></div>         
            </div>

            <div className="carousel-item ">
            <div className='col-lg-12'>
    <p><img src={f2} alt='login' style={{width:"100%",height:"350px",backgroundSize:"100%"}}></img></p></div>         
            </div>

            <div className="carousel-item ">
            <div className='col-lg-12'>
    <p><img src={f3}alt='login' style={{width:"100%",height:"350px",backgroundSize:"100%"}}></img></p></div>         
            </div>



            <div className="carousel-item ">
            <div className='col-lg-12'>
    <p><img src={f4} alt='login' style={{width:"100%",height:"350px",backgroundSize:"100%"}}></img></p></div>         
            </div>
        </div>



        <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>

    </div>


 <div className="bg-white mt-5 text-center mt-3"> <h1 className="fw-bold">Our Products</h1></div>

      <div className="container-fluid text-center">
		<div className="row">

		  <div className="col-lg-3 text-center" >
			{/* <h1><i className="fa-solid fa-dollar-sign"></i></h1> */}
			<h2>Lenovo</h2>
            <p><img src={laptop3}  width={310} height={290} alt='laptop3'></img></p>
            <p><b>₹49,000</b></p>
            <p style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                 <button class="btn btn-outline-success" style={{width:"100px"}}> Buy Now</button>
            <button class="btn btn-outline-primary"> Add To Cart</button></p>
		  </div>

		  <div className="col-lg-3 text-center" >  
			  {/* <h1><i className="fa-solid fa-gamepad"></i></h1> */}
			 <h2>Acer</h2>
             <p><img src={laptop2}  width={310} height={290} alt='laptop2'></img></p>
             <p><b>₹89,000</b></p>
             <p style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}> 
             <button class="btn btn-outline-success" style={{width:"100px"}}> Buy Now</button>
             <button class="btn btn-outline-primary"> Add To Cart</button></p>
		  </div>

	      <div className="col-lg-3 text-center" > 
			{/* <h1><i className="fa-regular fa-images"></i></h1> */}
			<h2>HP</h2>
            <p><img src={laptop4}  width={310} height={290} alt='laptop4'></img></p>
            <p> <b>₹59,500</b></p>
            <p style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
             <button class="btn btn-outline-success" style={{width:"100px"}}> Buy Now</button>
            <button class="btn btn-outline-primary"> Add To Cart</button></p>
		  </div>

		  <div className="col-lg-3 text-center">  
			{/* <h1><i className="fa-brands fa-space-awesome"></i></h1> */}
			<h2>DELL</h2>
            <p><img src={laptop5}  width={310} height={290} alt='laptop5'></img></p>
            <p><b> ₹39,800</b></p>
            <p style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}> 
            <button class="btn btn-outline-success" style={{width:"100px"}}> Buy Now</button>
            <button class="btn btn-outline-primary"> Add To Cart</button></p>
		  </div>
		</div>
        </div>
    </div>
  )
}

export default SlideImages
