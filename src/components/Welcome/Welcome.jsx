import React from 'react';
import './Welcome.css';
import arkaplan from '../../images/arkaplann.jpg'

function Welcome(props){
   
    return(
       
<div className="row" id="gradient" >
<img id="welcome" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" src={arkaplan}></img>
</div>

    )
}

export default Welcome