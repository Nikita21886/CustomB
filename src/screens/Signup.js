import React,{useState} from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {

  const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser",{
      method:'POST',
      header:{
        'Content-Type':'application/json'

      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
    })
    const json=await response.json()
    console.log(json);

    if(!json.success){
      alert("enter valid credentials")

    }

  }

const onChange=(event)=>{
  setcredentials({...credentials,[event.target.name]:event.target.value})
}


  return (
    <div>
      <div className="container">
        <form id="registerForm" className="form" onSubmit={handleSubmit}>
        {/* <Link to="/createuser" class="btn add-to-cart">Signup</Link> */}
          <h2>Signup</h2>
          <lable>Name</lable>
          <input type="text" id="registerUsername" name='name' value={credentials.name} onChange={onChange} placeholder="Username" required />
          <lable>Email Address</lable>
          <input type="email" id="registerEmail" name='email' value={credentials.email} onChange={onChange} placeholder="Email" required />
          <input type="password" id="registerPassword" name='password' value={credentials.password} onChange={onChange} placeholder="Password" required />
          <input type='text' name='geolocation' value={credentials.geolocation} onChange={onChange}></input>

          <button type="submit">Sign up</button>
          <Link to="/login" className='btn-danger'>Already a user</Link>

        </form>
      </div>
    </div>
  );
}

