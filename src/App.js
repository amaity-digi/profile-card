import './App.css';

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
      <Skill skill="JavaScript" emoji="👌" color="#888" />
      <Skill skill="React" emoji="😎" color="Yellow" />
      <Skill skill="HTML + CSS" emoji="😎" color="red" />
      <Skill skill="SQL" emoji="😎" color="purple" />
      <Skill skill="Java" emoji="👍" color="green" />
      <Skill skill="Mongodb" emoji="🤞" color="orange" />
    </div>
  )
}

function Skill(props) {
  const { skill, emoji, color } = props

  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  )
}

export default App;
