import React, { useState } from 'react';
import "../index.css"
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: ''
});
const navigate = useNavigate();
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
        .post('http://localhost:3001/users/signup', formData)
        .then((response) => {
            console.log(response)
            toast.success('Signed up successfully!', {
              onClose: () => {
      


                  setTimeout(() => {
                      navigate('/login');
                  }, 2000);
              },
          });

        })
        .catch((error) => {
            console.error('Error signing up in:', error);
            
        });
};

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',fontFamily:"arvo",color:"white",textAlign:"none",backgroundColor:"black" }}>
      <h2 style={{fontSize:"38px",color:"white",marginTop:"10%",marginBottom:"30px"}}>Signup</h2>
      <form onSubmit={handleSubmit} style={{ width: '350px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px',height:"460px"}}>
        <div style={{ marginBottom: '10px',marginTop:"10px" }}>
          Username:
          
        </div><input type="text" name='username' value={formData.username} onChange={handleChange} style={{ width: '100%', padding: '5px',marginBottom:"0px",borderRadius:"5px",backgroundColor:"#161515", border: '1px solid #ffc107' }} />
        <div style={{ marginBottom: '10px',marginTop:"10px" }}>
          Email:
          
        </div><input type="text" name='email' value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '5px',borderRadius:"5px",backgroundColor:"#161515", border: '1px solid #ffc107' }} />
        <div style={{ marginBottom: '10px',marginTop:"10px" }}>
          Password:
          
        </div><input type="password" name='password' value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '5px',borderRadius:"5px" ,backgroundColor:"#161515", border: '1px solid #ffc107' }} />
        <div style={{ marginBottom: '10px',marginTop:"10px" }}>
         Phone:
          
        </div><input type="text" name='phone' value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '5px',borderRadius:"5px" ,backgroundColor:"#161515", border: '1px solid #ffc107' }} />
        <button className="btn btn-outline-warning btn-lg" type="submit" style={{ marginTop: '30px', cursor: 'pointer',width:"100px",marginLeft:"100px",border:"3px solid #ffc107" }}>Register</button>
      </form>
      <div style={{width:"fit-content",margin:"auto",marginTop:"20px"}}>Already have an account? <Link to={'/login'} style={{color:"white"}}>Log In</Link></div>
      <ToastContainer/>
    </div>
  );
}

export default Signup;