import React from 'react'
import test from '../image/test.jpg'
import f1 from '../image/f1.jpg'
import f2 from '../image/f2.jpg'
import f3 from '../image/f3.jpg'
import team from '../image/team.jpg'
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom'


const Content = () => {
  return (
    <>
    <div>
      
  
      <div style={{class: "flexbox,background-container", backgroundImage: `url(${test})`, height: "660px" }}>

        <div style={{ backgroundColor: "rgb(0,0,0,0.4)", height: "660px" }}>
          <div style={{ fontSize: "78px", color: "white", fontFamily: "arvo", fontWeight: "500", paddingTop: "7%" }}>
            <div style={{ width: "fit-content", margin: "auto" , position: "relative"}}>
              Bid for your dream
            </div>
            <div style={{ width: "fit-content", margin: "auto", position: "relative", bottom: "30px" }}>
              purchase
            </div>
          </div>

          <div style={{ color: "white" }}>
            <div style={{ fontSize: "25px", width: "fit-content", margin: "auto" }}>
              Join Infinity Auctions and get a chance to own your desired item at the best price.
            </div>
            <div style={{ fontSize: "25px", width: "fit-content", margin: "auto" }}>
              Don't miss out!
            </div>
          </div>

          <div style={{width:"fit-content",margin:"auto"}}>
            <br></br>
            <br></br>
            <Link to={'/login'} className="btn btn-outline-warning btn-lg" role="button">Join Now</Link>
          </div>
        </div>



      </div>

      <div style={{class: "flexbox",backgroundColor: "black", height:"300px",alignContent: "center",display:"flex",justifyContent:"center",placeItems:"end normal"}}>
        <div style={{color:"white", fontFamily: "serif", fontWeight: "400", fontSize: "32px", width:"900px"}}>
        Infinity's auction services in Delhi are top-notch. Their team is knowledgeable, professional, and always goes the extra mile to ensure a smooth bidding process. Thank you for making my auction experience a great one!
        </div>
      </div>
      <br></br>
        <div style={{color:"white", fontFamily: "serif", fontWeight: "400", fontSize: "25px", height:"200px",backgroundColor: "black",width:"fit-content",margin:"auto"}}>
          - Harshit Gera
        </div>

      <h1 style={{color:"white", fontFamily: "serif",fontSize:"55px",width:"fit-content",margin:"auto"}}>Featured</h1>
      <br />
      <div style={{backgroundColor:"black", display:"flex",justifyContent:"center",alignItems:"center",gap:"40px"}}>
        <div>
          <img src={f1} alt="Auction Events" style={{borderRadius:"5%"}} height="310px"/>
          <div style={{color:"white",fontSize:"35px",fontFamily:"serif",fontWeight:"400"}}>Unique Auction Events</div>
          <div style={{color:"white"}}>Experience a variety of one-of-a-kind auction events in Delhi.</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <img src={f2} alt="Flower" style={{borderRadius:"5%"}} height="310px"/>
          <div style={{color:"white",fontSize:"35px",fontFamily:"serif",fontWeight:"400"}}>Expert Auctioneers</div>
          <div style={{color:"white",width:"80%"}}>Benefit from our team of experienced auctioneers for seamless bidding processes.</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <img src={f3} alt="Antique vase" style={{borderRadius:"5%"}} height="310px"/>
          <div style={{color:"white",fontSize:"35px",fontFamily:"serif",fontWeight:"400"}}>Extensive Collection</div>
          <div style={{color:"white", width:"80%"}}>Explore our extensive collection of rare and valuable items up for auction.</div>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div style={{display:"flex",  justifyContent:"center",alignItems:"center", gap:"120px"}}>
        <div style={{color:"white",fontFamily:"serif",fontWeight:"400"}}>
          <h1 style={{fontSize:"57px", textAlign:"left"}}>Meet the team</h1>
          <br />
          <div style={{width:"720px",height:"190px", fontSize:"20px", textAlign:"left"}}>At Infinity Auction, our team is a group of dedicated professionals who are passionate about creating exceptional auction experiences. With expertise in various fields, our team members work together to ensure every auction is a success. From our knowledgeable auctioneers to our efficient support staff, we strive to provide outstanding service and exceed our clients' expectations. Trust our team to handle your auction needs with professionalism, integrity, and a commitment to achieving the best possible results.</div>
        </div>

        <div>
          <img src={team} alt="team members" style={{borderRadius:"3%"}} height="500px" />
        </div>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"120px", fontFamily:"sans-serif", fontSize:"35px", color:"white", fontWeight:"540"}}>
        <div style={{width:"400px"}}>Over 1000 successful auctions</div>
        <div style={{width:"450px"}}>Highest bidder satisfaction rate</div>
        <div style={{width:"400px"}}>Trusted by top auction houses</div>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    </div>
    </>


  );
}

export default Content