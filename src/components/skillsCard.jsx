


import '../styles/skills.css'

export const SkillsCard = ({icon, title, onclick, isActive}) => {
  return (
    <>
    <div className={isActive ? "skillsCard active" : "skillsCard"} onClick={()=>{
      onclick()
    }}>

    <img src={icon} alt="" />
    <h2>{title}</h2>
    </div>
    </>
  )
}
















/* import "../styles/skills.css"

export const SkillsCard = ({title, icon, isActive, onClick}) => {
  return (
    <>
    <div className="skill-card-container">

        <div className={isActive ? "active" :"skills-card"}
        onClick={()=> onClick()}>
         <img className="skill-icon" src={icon} alt="" />
         <h5>{title}</h5>
        </div>

    </div>
    </>
  )
} */
