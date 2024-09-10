import { SkillsType } from '../GroupOfSkills/GroupOfSkills'
import { SkillContainer } from './Skill.style'





const  Skill= ({ title, yearsOfExp}:SkillsType)=>{

  return(
    <SkillContainer>

      <h2>
        {title}
      </h2>
      <p>{yearsOfExp} Years Experience</p>
    </SkillContainer>
  )
}


export default Skill

