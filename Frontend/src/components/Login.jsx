import React, { useState } from 'react';
import "../index.css"
import {Link} from 'react-router-dom'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add your authentication logic here
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',fontFamily:"arvo",color:"white",textAlign:"none",backgroundColor:"black" }}>
      <h2 style={{fontSize:"38px",color:"white",marginTop:"10%",marginBottom:"30px"}}>Login</h2>
      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px',height:"330px"}}>
        <div style={{ marginBottom: '10px',marginTop:"20px" }}>
          Username:
          
        </div><input type="text" value={username} onChange={handleUsernameChange} style={{ width: '100%', padding: '5px',marginBottom:"20px",borderRadius:"5px",backgroundColor:"#161515", border: '1px solid #ffc107' }} />
        <div style={{ marginBottom: '10px',marginTop:"10px" }}>
          Password:
          
        </div><input type="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '5px',borderRadius:"5px" ,backgroundColor:"#161515", border: '1px solid #ffc107' }} />
        <div style={{marginTop:"5px",fontSize:"14px",textAlign:"end"}}>Forgot password?</div>
        <button className="btn btn-outline-warning btn-lg" type="submit" style={{ marginTop: '15px', cursor: 'pointer',width:"100px",marginLeft:"80px",border:"3px solid #ffc107" }}>Login</button>
      </form>
      <div style={{width:"fit-content",margin:"auto",marginTop:"20px"}}>New to Infinity? <Link to={'/signup'} style={{color:"white"}}>Join now</Link></div>
    </div>
  );
}

export default Login;
