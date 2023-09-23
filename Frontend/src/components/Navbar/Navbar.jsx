import React from 'react'
import {GrYoutube} from 'react-icons/gr'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from "react-router-dom"
const Navbar = (props) => {
  return (<>
  
   <div style={{display:"flex",backgroundColor:"#000",height:"90px",color:"white",fontSize:"28px",fontFamily:"arvo",justifyContent:"space-between",alignItems:"center",paddingLeft:"3%",paddingRight:"3%"}}>
    <div style={{fontSize:"18px",display:"flex",gap:"10px",fontFamily:"Arial"}}><div style={{fontSize:"16px",marginTop:"2px"}}>Menu</div><div><AiOutlineMenu/></div></div>
    <div ><Link style={{textDecoration:"none",color:"white"}} to={'/'}>Infinity</Link></div>
    <div style={{display:"flex",gap:"10px"}}>{props.isLoggedin?(<div><Link onClick={()=>{props.setuserdata([]);props.setLoggedin(false)}}  className="btn btn-outline-warning btn-lg" role="button">Log out</Link></div>):(<></>)}<div><GrYoutube/></div><div><BiLogoInstagramAlt/></div><div><FaFacebookSquare/></div></div>
   </div>
  </>
   
  )
}

export default Navbar