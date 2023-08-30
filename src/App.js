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
    <img src='photo.jpg' alt='avatar' />
  )
}

function Intro() {
  return (
    <h2>Hello</h2>
  )
}

function SkillList() {
  return (
    <h2>Hello</h2>
  )
}

export default App;
