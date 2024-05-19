import React from 'react'
import laptop3 from "../Assets/laptop3.png"
import laptop2 from "../Assets/laptop2.png"
import laptop4 from "../Assets/laptop4.png"
import laptop5 from "../Assets/laptop5.png"


const Things = () => {
  return (
    <div>
      
      <div className="bg-white mt-5 text-center mt-3"> <h1 className="fw-bold">Our Products</h1></div>

      <div className="container-fluid text-center">
		<div className="row">

		<div className="col-lg-3 text-center" >
			<h1><i className="fa-solid fa-dollar-sign"></i></h1>
			<h2>Lenovo</h2>
            <p><img src={laptop3}  width={310} height={290} alt='laptop3'></img></p>
            <p><b>₹49,000</b></p>
            <p style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                 <button class="btn btn-outline-success" style={{width:"100px"}}> Buy Now</button>
            <button class="btn btn-outline-primary"> Add To Cart</button></p>
			</div>

			<div className="col-lg-3 text-center" >  
			<h1><i className="fa-solid fa-gamepad"></i></h1>
			<h2>Acer</h2>
            <p><img src={laptop2}  width={310} height={290} alt='laptop2'></img></p>
            <p><b>₹89,000</b></p>
            <p style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}> 
            <button class="btn btn-outline-success" style={{width:"100px"}}> Buy Now</button>
            <button class="btn btn-outline-primary"> Add To Cart</button></p>
			</div>

	        <div className="col-lg-3 text-center" > 
			<h1><i className="fa-regular fa-images"></i></h1>
			<h2>HP</h2>
            <p><img src={laptop4}  width={310} height={290} alt='laptop4'></img></p>
            <p> <b>₹59,500</b></p>
            <p style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
             <button class="btn btn-outline-success" style={{width:"100px"}}> Buy Now</button>
            <button class="btn btn-outline-primary"> Add To Cart</button></p>
		    </div>

		    <div className="col-lg-3 text-center">  
			<h1><i className="fa-brands fa-space-awesome"></i></h1>
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

export default Things
