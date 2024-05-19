// import React from 'react'
import axios from 'axios'
import React,{useEffect, useState} from 'react'

const Product=()=> {

  const initialValues={category:"",productname:"",qty:"",uom:"",price:"",stock:"",description:""}
  const [formValues,setFormvalues]=useState(initialValues)
  const[file,setFile]=useState("")

  //----to update the category automatically
  const [catList,setCatList]=useState([])
  // const utype=localStorage.getItem('log')
  useEffect(()=>{
    getCategory();
  },[])
  const getCategory=async()=>{

    const result=await axios.get("http://localhost:3001/viewcategory");
    setCatList(result.data);
    console.log(result.data);
  }
//-----------
  const setImgFile=(e)=>{
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }

  const handlechange=(e)=>{
    const {name,value}=e.target
    setFormvalues({...formValues,[name]:value});
    console.log(formValues.category);
  }

  

  const FormProduct=(e)=>{
    e.preventDefault();
    var formData=new FormData();
    formData.append("file",file)
    formData.append("category",formValues.category)
    formData.append("productname",formValues.productname)
    formData.append("qty",formValues.qty)
    formData.append("uom",formValues.uom)
    formData.append("price",formValues.price)
    formData.append("stock",formValues.stock)
    formData.append("description",formValues.description)
    console.log(...formData);
    const config={
      Headers:
      {
        "Content-Type":"multipart/form-data"
      }
    }
    axios.post("http://localhost:3001/pro",
    formData,config
      // uid:uid
    ).then((response)=>{
      console.log(response);
        alert("Thank You For Chhosing Our Product, Visit Again🙏🙏🙏")
      //window.location='http://localhost:3000
    })
    .catch(error=>{
      console.log(error);
    })
  }


  return (
    <div>
      <section className="vh-100">
  <div className="mask d-flex align-items-center h-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b>Product</b></h2>
              <hr></hr>

              <form onSubmit={FormProduct}>

                <div className="form-outline mb-4">
                  <label className="form-label" >
                    <b>Category</b></label>
                  {/* <input type="text" className="form-control form-control-lg" 
                  name='category' value={formValues.category}   onChange={handlechange} /> */}
                  <select className="form-control form-control-lg" 
                  name='category' defaultValue={formValues.category}   onChange={handlechange}>
                    <option>----Select Category----</option>
                    {
                      catList.map((cat,index)=>{
                        return (
                          <option ke={cat.id} value={cat.categoryname}>{cat.categoryname}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Product Name</b></label>
                  <input type="text"  className="form-control form-control-lg" value={formValues.productname} name='productname'  onChange={handlechange} />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Quantity</b></label>
                  <input type="number"  className="form-control form-control-lg" value={formValues.qty} name='qty'  onChange={handlechange}  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label"><b>UOM</b></label>
                  <input type="text" className="form-control form-control-lg" value={formValues.uom} name='uom'  onChange={handlechange} />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>Price</b></label>
                  <input type="number"  className="form-control form-control-lg" value={formValues.price} name='price' onChange={handlechange} />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label"><b>Stock</b></label>
                  <input type="number"  className="form-control form-control-lg" value={formValues.stock} name='stock' onChange={handlechange} />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label"><b>Images</b></label>
                  <input type="file"  className="form-control form-control-lg" name='file' onChange={setImgFile} />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label"><b>Description</b></label>
                  <input type="text"  className="form-control form-control-lg" value={formValues.description} name='description' onChange={handlechange} />
                </div>

                <div className="d-flex justify-content-center">
                  <button className="btn" type='submit' style={{width:"170px", height:"40px",border:"2px solid silver",fontWeight:"bold",
                     boxShadow:"2px 3px 4px 2px  silver",borderRadius:"3%"}}>Submit</button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Product

































// // import React from 'react'
// import axios from 'axios'
// import React,{useState} from 'react'


// const Product=()=> {

//   const initialValues={category:" ",productname:" ",qty:" ",uom:" ",price:" ",stock:" ",image:" ",description:" "}
//   const [formValues,setFormvalues]=useState(initialValues)

//   const handlechange=(e)=>{
//     const {name,value}=e.target
//     setFormvalues({...formValues,[name]:value});
//     console.log(formValues.price);
//   }

//   const FormProduct=(e)=>{
//     e.preventDefault();
//     axios.post("http://localhost:3001/product",{
//       feeddata:formValues

//     }).then((response)=>{
//       console.log(response);
//       alert("Thank you for choosing our products")
//     })

//     .catch(error=>{
//       console.log(error);
//     })
//   }

//   return (
//     <div>
//       <section className="vh-100">
//   <div className="mask d-flex align-items-center h-100">
//     <div className="container h-100">
//       <div className="row d-flex justify-content-center align-items-center h-100">
//         <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//           <div className="card" style={{borderRadius: "15px"}}>
//             <div className="card-body p-5">
//               <h2 className="text-uppercase text-center mb-5"><b>PRODUCT</b></h2>
//               <hr></hr>

//               <form onSubmit={FormProduct}>


//                 <div className="form-outline mb-4">
//                   <label className="form-label"><b>Category</b></label>
//                   <input type="text"  className="form-control form-control-lg" name='category' value={formValues.category} onChange={handlechange} required />
//                 </div>

//                 <div className="form-outline mb-4">
//                   <label className="form-label" ><b>Product_name</b></label>
//                   <input type="text" className="form-control form-control-lg" name='productname' value={formValues.productname} onChange={handlechange} required/>
//                 </div>

//                 <div className="form-outline mb-4">
//                 <label className="form-label" ><b>Quantity</b></label>
//                   <input type="number"  className="form-control form-control-lg" name='qty' value={formValues.qty} onChange={handlechange} required />
//                 </div>
                
//                 <div className="form-outline mb-4">
//                 <label className="form-label"><b>Uom</b></label>
//                   <input type="text"  className="form-control form-control-lg" name='uom' value={formValues.uom} onChange={handlechange}  required/>
//                 </div>
//                 <div className="form-outline mb-4">
//                 <label className="form-label" ><b>Price</b></label>
//                   <input type="number"  className="form-control form-control-lg" name='price' value={formValues.price} onChange={handlechange} required />
//                 </div>
//                 <div className="form-outline mb-4">
//                 <label className="form-label"><b>Stock</b></label>
//                   <input type="number"  className="form-control form-control-lg" name='stock' value={formValues.stock} onChange={handlechange} required />
//                 </div>

//                 <div className="form-outline mb-4">
//                 <label className="form-label"><b>Image</b></label>
//                   <input type="text"  className="form-control form-control-lg" name='image' value={formValues.image} onChange={handlechange} required/>
//                 </div>

//                 <div className="form-outline mb-4">
//                 <label className="form-label"><b>Description</b></label>
//                   <input type="text"  className="form-control form-control-lg" name='description' value={formValues.description} onChange={handlechange} required/>
//                 </div>
                
//                 <div className="d-flex justify-content-center">
//                   <button type="submit"
//                     className="btn" style={{width:"170px", height:"40px",
//                     border:"2px solid silver",fontWeight:"bold",
//                      boxShadow:"2px 3px 4px 2px  silver ",borderRadius:"3%"}}>Register</button>
//                 </div>

//               </form>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default Product






