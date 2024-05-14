
import Slider from "react-slick";
import { WorkExperience } from "../../utils/workData.js"
/* import { WorkExperience } from "../../locales/experience/datos.json" */

import "./experience.css"
import { ExperienceCard } from "./experienceCard/experienceCard.jsx"

export const Experience = () => {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="experienceContainer">
        <h5>Work Experience</h5>
        <div className="experienceContent">
        <Slider {...settings}>
          {WorkExperience.map((item, index)=>(
            <ExperienceCard
              key={index}
              company={item.company}
              date={item.date}
              description={item.description}
            />
          ))}
         </Slider>
        </div>
      </div>
    </>
  )
}