import React from 'react'
import login from "../Assets/login.png"

const About = () => {
  return (
    <div>
      <div className="container-fluid" >
		<div className="row shadow mt-4" style={{display:"flex",justifyContent:"space-around"}}>
			<div className="col-lg-6 shadow-lg bg-pink">
				<h1>ABOUT</h1><hr style={{width:"40%"}}></hr>
				<p style={{textAlign:"justify"}}>Online shopping is a form of electronic commerce which 
                allows consumers to directly buy goods or services from a seller over the Internet using a
                 web browser or a mobile app. Consumers find a product of interest by visiting the website
                  of the retailer directly or by searching among alternative vendors using a shopping 
                  search engine, which displays the same product's availability and pricing at different
                   e-retailers. As of 2020, customers can shop online using a range of different computers 
                   and devices, including desktop computers, laptops, tablet computers and smartphones. An
                    online shop evokes the physical analogy of buying products or services at a regular 
                    "bricks-and-mortar" retailer or shopping center; the process is called business-to-
                    consumer (B2C) online shopping. When an online store is set up to enable businesses
                     to buy from another businesses, the process is called business-to-business (B2B) online 
                     shopping. A typical online store enables the customer to browse the firm's range of products
                      and services, view photos or images of the products, along with information about the product
                       specifications, features and prices.</p>
			</div>
		

            <div className='col-lg-6'>
    <p><img src={login}  width={600} height={400} alt='login'></img></p>
</div>

    	</div>
        </div>
	</div>
  )
}
export default About
