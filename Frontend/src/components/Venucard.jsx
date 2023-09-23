import React, {useState, useEffect } from 'react'
import venue1 from "../components/image/UrbanGavel.png"
import venue2 from "../components/image/Capital_Elite_Auctions.png"
import venue3 from "../components/image/CharmCity_Bidding.png"
import venue4 from "../components/image/CityScape_Auction.png"
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
const Venucard = (props) => {
    let venue_array = [
        { title: "UrbanGavel", date: "1/10/21", min_bid: "1,500$", img: venue1 },
        { title: "CityScape Auction", date: "12/11/23", min_bid: "2,000$", img: venue2 },
        { title: "CharmCity Bidding", date: "10/10/22", min_bid: "10,000$", img: venue3 },
        { title: "Prestige Plaza Auctions", date: "1/11/21", min_bid: "1000$", img: venue4 }
      ];



    useEffect(()=>{
        var formData = {
   
            password: props.userdata.password,
            email: props.userdata.email,
            booking: props.booking_array
        
        };
        axios.post('http://localhost:3001/users/book',formData).then((response)=>{
            console.log(response)
            
         
   }
  
   ).catch((error) => {
       console.error(error);
     });

    },[props.booking_array])
    

   
   
   
    
  return (
    <>
    {venue_array.map((venue_array)=>{
        return (<div  style={{height:"500px",width:"70%",backgroundColor:"rgb(10, 10, 10",margin:"auto",color:"white",borderRadius:"5px",marginBottom:"20px"}}>
        <div style={{display:"flex",gap:"100px"}}>
            <div style={{height:"400px",width:"500px",backgroundColor:"#161515",marginTop:"50px",marginLeft:"30px",borderRadius:"10px",backgroundImage:`url(${venue_array.img})`,backgroundSize:"cover"}}>
                

            </div>
            <div style={{fontSize:"36px",marginTop:"50px",maxWidth:"50%"}}>
                 {venue_array.title}
                <div style={{fontSize:"18px"}}>
                    <div style={{fontSize:"26px"}}>Venue Description:</div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum sequi blanditiis quibusdam reprehenderit architecto expedita commodi modi suscipit nisi. Necessitatibus corporis rem autem soluta doloribus recusandae odio eum itaque praesentium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rem impedit autem hic culpa illo ipsa at sequi, voluptatibus, cumque ratione dolore eveniet laborum ullam maxime unde in magni quae!
                </div>
                <div style={{fontSize:"26px",marginTop:"10px"}}>
                    Venue Date: {venue_array.date}
                </div>
                <div style={{fontSize:"26px",marginTop:"10px"}}>
                    Minimum Bidding: {venue_array.min_bid}
                </div>
                <div style={{fontSize:"20px",marginTop:"40px",textAlign:"end"}}>
                <button className="btn btn-outline-warning btn-lg" type="submit" style={{padding:"5px",width:"150px",position:"relative",right:"20px"}}>Wishlist</button>
                   <button className="btn btn-outline-warning btn-lg" type="submit" style={{padding:"5px",width:"150px"}}onClick={()=>{props.appendfn(venue_array);toast.success("Booking success")}}>Book Slot</button>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>)
    })}
    
    </>
    
  )
}

export default Venucard