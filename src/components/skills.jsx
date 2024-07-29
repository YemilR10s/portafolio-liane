
import '../styles/skills.css'
import {SkillsData} from "../utils/skillsData"
import { SkillsCard } from '../components/skillsCard'
import { useState } from 'react'
import { SkillInfo } from './skillInfo'



export const Skills = () => {
  const [selectSkill, setSelectSkill] = useState(SkillsData[0])

  const handleSelect = (item)=>{
    setSelectSkill(item)
  }


  return (
    <>
    
    <div className="skills-container">
      <div className="skills-content">
        <div className="skills-card-content">
          {SkillsData.map((item)=>(
            <SkillsCard 
            key={item} 
            icon={item.icon} 
            title={item.title}
            isActive={selectSkill.title === item.title}
            onclick={()=>{
              handleSelect(item)
            }}
            />
          ))}
        </div>
        <div className="skills-info-content">

          <SkillInfo 
          skillSelect={selectSkill.title}
          skills={selectSkill.skills}
          />

        </div>
      </div>
    </div>
    
    </>
  )
}




























/* import "../styles/skills.css"
import { SkillsData } from "../utils/skillsData"
import { SkillsCard } from "./skillsCard"
import { SkillInfo } from "./skillInfo"
import { useState } from "react"


export const Skills = () => {

  const [selectSkill, setSelectSkill] = useState(SkillsData[0])
  
 const handleSelectSkill = (data)=>{
    setSelectSkill(data)
 }
  return (
    <>
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {
            SkillsData.map((item)=>(
              <SkillsCard 
              key={item.title} 
              title={item.title} 
              icon={item.icon} 
              onClick={()=>{
                handleSelectSkill(item)
              }}
             />
            ))
          }
        </div>
        <div className="skills-info">
          <SkillInfo 
          heading={selectSkill.title}
          Skills={selectSkill.icon}
             />
        </div>
      </div>
    </section>
    
    </>
  )
}
 */





























/* 
export const Skills = () => {
  return (
    <>
    <div className="skill-container">
        <h5>technical proficiency</h5>
        <div className="skills-content">

            <div className="skills">
            {SkillsData.map((item) =>(
                <SkillsCard
                key={item}
                icon={item.icon}
                title={item.title}
                />
            ))}
            </div>

            {<div className="skills-info"></div>}
        </div>
    </div>
    </>
  )
}
 */