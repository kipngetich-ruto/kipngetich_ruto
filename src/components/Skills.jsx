const Skills = () => {
    const nav_skills = [
        {
            src:'/img/html',
            alt: 'HTML'
        },
        {
            src:'/img/html',
            alt: 'CSS'
        },
        {
            src:'/img/html',
            alt: 'JS'
        },
        {
            src:'/img/html',
            alt: 'Bootstrap'
        },
        {
            src:'/img/html',
            alt: 'REACTJS'
        },
        {
            src:'/img/html',
            alt: 'TAILWIND'
        },
        {
            src:'/img/html',
            alt: 'PHP'
        },
        {
            src:'/img/html',
            alt: 'MYSQL'
        },
        {
            src:'/img/html',
            alt: 'MONGODB'
        }
    ]
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