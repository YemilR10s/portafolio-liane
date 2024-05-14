
import "./experienceCard.css"


export const ExperienceCard = ({ company, date , description }) => {
  return (
    <>
      <div className="work-experience-card">
        <h6 className="company">{company}</h6>
        <h6 className="duration">{date}</h6>
        <p className="description">{description}</p>
      </div>
    </>
  )   
}

