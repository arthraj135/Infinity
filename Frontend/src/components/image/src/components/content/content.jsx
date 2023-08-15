import React from 'react'
import './content.css'
import img from '../../images/1023.webp'
import img1 from '../../images/images (1).jpg'

const Content = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="..." style={{height :"400px" , width :"200px" }} />
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100" alt="..." style={{height :"400px" , width :"200px" }} />
    </div>
    <div className="carousel-item">
      <img src={img} className="d-block w-100" alt="..." style={{height :"400px" , width :"200px" }} />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div class="row">
    <div class="col-12">
    <img src={img} className="d-block w-100" alt="..." style={{height :"400px" , width :"200px" }} />
    </div>
    <div class="col-6">
    <img src={img} className="d-block w-100" alt="..." style={{height :"400px" , width :"200px" }} />
    </div>
    <div class="col-6">
      Column TEXT
    </div>
  </div>
    </div>
  )
}

export default Content
