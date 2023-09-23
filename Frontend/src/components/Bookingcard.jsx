import React from 'react'
import venue1 from "../components/image/UrbanGavel.png"
import venue2 from "../components/image/Capital_Elite_Auctions.png"
import venue3 from "../components/image/CharmCity_Bidding.png"
import venue4 from "../components/image/CityScape_Auction.png"

const Bookingcard = (props) => {
    console.log(props.userdata)
    if(props.userdata.booking){

        return (
            <>
        
            {props.userdata.booking.map((venue_array)=>{
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
                       
                           <button className="btn btn-outline-warning btn-lg" type="submit" style={{padding:"5px",width:"150px"}}>Cancel Slot</button>
                        </div>
                    </div>
                </div>
            </div>)
            })}
            
            </>
            
          )
    }
 else{
    return <div>Nothing here</div>
 }
}

export default Bookingcard