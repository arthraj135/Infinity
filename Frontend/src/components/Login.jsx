import React, { useState } from 'react';
import "../index.css"
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login(props) {
  const [formData, setFormData] = useState({
   
    password: '',
    email: ''

});

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios
          .post('http://localhost:3001/users/login', formData)
          .then((response) => {
              console.log(response)
              toast.success('Logged in successfully!', {
                onClose: () => {
        
                  props.setuserdata(response.data)
  
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                },
            });
  
          })
          .catch((error) => {
              console.error('Error signing up in:', error);
              
          });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',fontFamily:"arvo",color:"white",textAlign:"none",backgroundColor:"black",marginBottom:"150px" }}>
      <h2 style={{fontSize:"38px",color:"white",marginTop:"10%",marginBottom:"30px"}}>Login</h2>
      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px',height:"330px"}}>
        <div style={{ marginBottom: '10px',marginTop:"20px" }}>
          Email:
          
        </div><input type="text" name='email' value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '5px',marginBottom:"20px",borderRadius:"5px",backgroundColor:"#161515", border: '1px solid #ffc107' }} />
        <div style={{ marginBottom: '10px',marginTop:"10px" }}>
          Password:
          
        </div><input type="password"  name='password' value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '5px',borderRadius:"5px" ,backgroundColor:"#161515", border: '1px solid #ffc107' }} />
        <div style={{marginTop:"5px",fontSize:"14px",textAlign:"end"}}>Forgot password?</div>
        <button className="btn btn-outline-warning btn-lg" type="submit" style={{ marginTop: '15px', cursor: 'pointer',width:"100px",marginLeft:"80px",border:"3px solid #ffc107" }}>Login</button>
      </form>
      <div style={{width:"fit-content",margin:"auto",marginTop:"20px"}}>New to Infinity? <Link to={'/signup'} style={{color:"white"}}>Join now</Link></div>
      <ToastContainer/>
    </div>
  );
}

export default Login;
