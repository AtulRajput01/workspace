import React from 'react'
import './AboutUs.scss'
import video1 from './image/video1.mp4';
import about1 from './image/about1.png';
import about2 from './image/about2.png';
import about3 from './image/about3.png';
import certification from './image/certification.png';
import image6 from './image/image6.png';
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <div className='about'>
      <div className='about1'>

        <video className="video-bg" autoPlay muted loop src={video1}></video>
        <div className="overlay"> </div>

      </div>


      <div className="about2">
        <img src={about1} alt="" />
      </div>

      {/* <div className="container my-5">
            <div className="row text-center mb-5">
                <div className="col-md-12">
                    <img src="/path/to/mission-image.png" alt="Mission" className="img-fluid mb-3"/>
                    <h2>Mission</h2>
                    <p>To help our client succeed and not just survive in the ever-evolving digital world</p>
                </div>
                <div className="col-md-12">
                    <img src="/path/to/vision-image.png" alt="Vision" className="img-fluid mb-3"/>
                    <h2>Vision</h2>
                    <p>To help our client succeed and not just survive in the ever-evolving digital world</p>
                </div>
                <div className="col-md-12">
                    <img src="/path/to/values-image.png" alt="Values" className="img-fluid mb-3"/>
                    <h2>Values</h2>
                    <p>To help our client succeed and not just survive in the ever-evolving digital world</p>
                </div>
            </div>
        </div> */}

      <div className="our1">
        <div className="one">
          <p>our</p>
        </div>
      </div>

      <div className="our2">
        <div className="two">
          <p>CHAIRPERSON</p>
        </div>
      </div>

      <div className="about3">
        <img src={about2} alt="" />
      </div>

      <div className="about4">
        <img src={certification} alt="" />
      </div>

      <div className="about5">
        <img src={image6} alt="" />
        <div className="button-about5">
          <Link to='/case-study'>

          <button className="button2">
            View More
          </button>
          </Link>
        </div>
      </div>
      <div className="about6">
        <Link to ='/contact-us'>
        <img src={about3} alt="" />
        </Link>
      </div>

    </div>
  )
}

export default AboutUs