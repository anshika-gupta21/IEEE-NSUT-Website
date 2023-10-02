import React  from "react";
import './gallery.css';
import ig1 from './Galleria_images/ig1.png';
import ig2 from './Galleria_images/ig2.png';
import ig3 from './Galleria_images/ig3.png';
import ig4 from './Galleria_images/ig4.png';
import ig5 from './Galleria_images/ig5.png';
import learning_p2 from './Galleria_images/learning_p2.png';
import learning_p3 from './Galleria_images/learning_p3.png';
import learning_p4 from './Galleria_images/learning_p4.png';
import learning_p6 from './Galleria_images/learning_p6.png';
import leearning_p5 from './Galleria_images/leearning_p5.png';
import learning_phase2 from './Galleria_images/learning_phase2.png';
import ieeeday from './Galleria_images/ieee_day.png';
import iee2 from './Galleria_images/iee_day2.png';
const Gallery =()=>{
    let data=[
        {
            id:1,
            imgSrc:ig1,
        },
        {
            id:2,
            imgSrc:ig2,
        },
        {
            id:3,
            imgSrc:ig3,
        },
        {
            id:4,
            imgSrc:ig4,
        },
        {
            id:5,
            imgSrc:ig5,
        },
        {
            id:6,
            imgSrc:learning_p2,
        },
        {
            id:7,
            imgSrc:learning_p3,
        },
        {
            id:8,
            imgSrc:learning_p4,
        },
        {
            id:9,
            imgSrc:learning_p6,
        },
        {
            id:10,
            imgSrc:learning_phase2,
        },
        {
            id:11,
            imgSrc:leearning_p5,
        },
        {
            id:12,
            imgSrc:ieeeday,
        },
        {
            id:13,
            imgSrc:iee2,
        },
      
    ]

    return(
        <>
        <div className="gallery">
            
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index}>
                        <img src={item.imgSrc} style={ { width:'100%'}} />
                    </div>
                )
            })}
        </div>
        
        </>
    )

}
export default Gallery