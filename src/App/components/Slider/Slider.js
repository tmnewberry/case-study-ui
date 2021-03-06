import React, { Component } from 'react';
import Slider from 'react-slick';
import NextIcon from '../../../../node_modules/material-ui/svg-icons/image/navigate-next';
import PrevIcon from '../../../../node_modules/material-ui/svg-icons/image/navigate-before';

class SliderComponent extends Component {
	 constructor(props){
    super(props);
    this.state = { 
        imagesArray: this.props.images
    };
  }

render(){
  
   let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      nextArrow: <NextIcon style={{ marginRight: '100px' }} />,
      prevArrow: <PrevIcon style={{ marginLeft: '100px' }} />
    };

   return (<Slider {...settings} id="slider">
               {this.state.imagesArray.map((image, index) => (
                <div style={{ marginTop: '25px' }} key={index}>
                    <img  style={{ height: '100%', width: '100%' }} src={image.image} />
                </div>
                ))} 
            </Slider>
    
        );

}

}

export default SliderComponent;
