import React from 'react'
import {GrYoutube} from 'react-icons/gr'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {FaFacebookSquare} from 'react-icons/fa'
import {Link} from 'react-router-dom'


const Footer = () => {
    return(
        <>
        <div style={{backgroundColor:"rgb(10,10,10)", height:"200px",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",position:"absolute",left:"0px"}}>
            <div style={{display:"flex",width:"300px",height:"190px",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <br />
                <h1 style={{fontFamily:"arvo",color:"white"}}>Infinity</h1>
                <br />
                <div style={{fontFamily:"arvo",fontSize:"19px",color:"white"}}><Link to={'/terms'}>Terms of service</Link></div>
                <br />
                <div style={{display:"flex",gap:"10px",height:"90px",color:"white",fontSize:"28px"}}><div><GrYoutube/></div><div><BiLogoInstagramAlt/></div><div><FaFacebookSquare/></div></div>
                <br />
            </div>
        </div>
        </>
    )
}

export default Footer