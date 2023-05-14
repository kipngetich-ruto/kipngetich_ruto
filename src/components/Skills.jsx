import {nav_skills} from './data'
const Skills = () => {
  return (
    <div className="skills" id="skills">
        <h2>
            Development skills
        </h2>
        <ul>
            {
                nav_skills.map((skill,index) => (
                    <li key={index}>
                        <img src={skill.src} alt={skill.alt} title={skill.alt} />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Skills