import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className='d-flex'>
            <img src="https://cdn.discordapp.com/attachments/1048250927787810836/1078817106428182650/image.png" alt="" style={{width:"92vw",height:"88vh"}} />
          </div>
          <div className='d-flex'>
            <img src="https://cdn.discordapp.com/attachments/1048250927787810836/1078817913995268146/image.png" alt="" style={{width:"100vw",height:"88vh",padding:'40px'}} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slider