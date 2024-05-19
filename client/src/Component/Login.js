// import React from 'react'
import axios from 'axios'
import React , {useState} from 'react'
import login from "../Assets/login.png"

const  Login=()=> {
    const initialValues={username:"",password:""}
    const [formValues,setFormValues]=useState(initialValues)
    const[loginStatus,setLoginStatus]=useState('')

    const handlechange=(e)=>{
        const {name,value}=e.target
        setFormValues({...formValues,[name]:value});
        console.log(formValues.username);   
    }
   
    const FormLogin=(e)=>{
        // console.log(formValues);
        // const logindata=JSON.stringify(formValues);
        console.log(formValues.username);
        e.preventDefault();
        axios.post("http://localhost:3001/login",{
            logindata:formValues
        })
        .then((response)=>{
            console.log(response);
            if(response.data.length>0)
            {
                let utype=response.data[0].utype
                setLoginStatus('')
                localStorage.setItem('user',formValues.username)
                localStorage.setItem('log',utype)
                if(utype==="user")
                {
                    window.location="http://localhost:3000/uhome";
                }
                if(utype==='admin'){
                    window.location="http://localhost:3000/ahome"
                }
            }
            else{
                //setLoginStatus(response.data[0].username)
                setLoginStatus('sorry..! Invalid username or password')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
       <div className="contianer" style={{marginTop:"100px"}}>
        <div className="row">
            <div className='col-lg-6 mt-3'>
                <div className='card'>
                    <div className='card-header'>
        <h1 className="text-success"> Login Now</h1>
         </div>

         <div className='card-body'>
            <form onSubmit={FormLogin}>
        <div className="mt-3 mb-3">
            <label> Email </label>
            <input type="text" className="form-control w-50 border border-1 border-success"
             value={formValues.username} name="username"onChange={handlechange}/>
        </div>
        

        <div className="mt-3 mb-3">
            <label> Password </label>
            <input type="password" name="password" className="form-control w-50 border border-1 border-success"
             value={formValues.password } onChange={handlechange}/>
        </div>
        
         <p> <button className="btn btn-success w-50" type='submit' value={login}> Login Now </button></p>
         </form>

         <p className='text-danger'>{loginStatus}</p>
    </div>
</div>
</div>
      
      <div className='col-lg-6'>
        <p><img src={login} width={600} height={400} alt='login'/> </p>
        <p className='text-primary'><a href={`/fpass/`}>Forgot Password</a></p>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Login



















// import React from 'react'
// // import React , {useState} from 'react'
// import login from "../Assets/login.png"

// function Login() {
//   return (
//     <div>
//         <div className="contianer" style={{marginTop:"100px"}}>
//         <div className="row">
//             <div className='col-lg-6 mt-3'>
//                 <div className='card'>
//                 <div className='card-header'>
//                 <h1 className="text-success"> Login Now</h1>
//                 </div>

//                 <div className='card-body'>

//         <div className="mt-3 mb-3">
//             <label> Email </label>
//             <input type="text" name="email" className="form-control w-50 border border-1 border-success"/>
//         </div>

//         <div className="mt-3 mb-3">
//             <label> Password </label>
//             <input type="password" name="email" className="form-control w-50 border border-1 border-success"/>
//         </div>
        
//          <p> <button className="btn btn-success w-50"> Login Now </button></p>
//     </div>
//     </div>
//     </div>

// <div className='col-lg-6'>
//     <p><img src={login}  width={600} height={400} alt='login'></img></p>
// </div>

//     </div>
// </div>
//       </div>
//   )
// }

// export default Login
