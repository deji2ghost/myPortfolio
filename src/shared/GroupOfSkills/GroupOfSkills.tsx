import Skill from '../Skill/Skill';
import { GroupOfSkillsContainer } from './GroupOfSkills.style';



export type SkillsType ={
    title:string;
    yearsOfExp:number
}
type Prop ={
    skills:SkillsType[]
}
const GroupOfSkills=  ({skills}:Prop):React.ReactElement=>{


  
  return (
    <GroupOfSkillsContainer>
      {
        skills.map((data,index)=>(
          <Skill 
            key={index}
            title={data.title}
            yearsOfExp={data.yearsOfExp}
          />

        ))
      }
    </GroupOfSkillsContainer>
  )
}

export default GroupOfSkills