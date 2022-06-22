import React, { useEffect} from 'react';
import hoverEffect from 'hover-effect';
import image from '../img/1.png';
import image2 from '../img/2.png';
import overlay from '../img/diss.png';

const Distorcion = () => {


    useEffect(() => {
        const item_image = document.querySelector('.distortions');
        new hoverEffect({
            parent: item_image,
            intensity: .3,
            image1: image,
            image2: image2,
            displacementImage: overlay,
            imagesRatio: 380/300
        })
    },[])

  return (
    <div className="distortions"></div>
  )
}

export default Distorcion