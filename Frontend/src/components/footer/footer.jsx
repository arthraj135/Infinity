import React from 'react'
import {GrYoutube} from 'react-icons/gr'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {FaFacebookSquare} from 'react-icons/fa'

const Footer = () => {
    return(
        <>
        <div style={{backgroundColor:"aqua", height:"400px"}}>
            <div style={{backgroundColor:"red",display:"flex",width:"400px"}}>
                <h1 style={{fontFamily:"arvo"}}>Infinity</h1>
                <div>
                    <a href="">Terms of service</a>
                    <a href=''>Team</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer