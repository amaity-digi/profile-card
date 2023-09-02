import './App.css';

const skills = [
  {
    skill: "HTML + CSS",
    level: "beginner",
    color: "#EFD81D"
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#9FD6"
  },
  {
    skill: "React.js",
    level: "advanced",
    color: "#61DAFB"
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "#68A063"
  },
  {
    skill: "TypeScript.js",
    level: "intermediate",
    color: "#888"
  },
  {
    skill: "MongoDB",
    level: "advanced",
    color: "#88b2"
  },
];


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div >
      <img className='avatar' src='profile.jpg' alt='avatar' />
    </div>

  )
}

function Intro() {
  return (
    <div className='data'>
      <h2>Ashish Maity</h2>
      <p>Full Stack web developer and strong knowledge on JavaScript, React ,Java, SQL. Next will be learn Next.js and Typescript as well.</p>
    </div>

  )
}

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill) => <Skill skill={skill.skill} level={skill.level} color={skill.color}/>)}
      {/* <Skill skill="JavaScript" emoji="👌" color="#888" />
      <Skill skill="React" emoji="😎" color="Yellow" />
      <Skill skill="HTML + CSS" emoji="😎" color="red" />
      <Skill skill="SQL" emoji="😎" color="purple" />
      <Skill skill="Java" emoji="👍" color="green" />
      <Skill skill="Mongodb" emoji="🤞" color="orange" /> */}
    </div>
  )
}

function Skill(props) {
  const { skill, level, color } = props

  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "😁"}
        {level === "intermediate" && "😎"}
        {level === "advanced" && "👍"}
      </span>
    </div>
  )
}

export default App;
