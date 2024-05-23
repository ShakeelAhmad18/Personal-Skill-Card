import Avater from "./components/Avater";
import './App.css'
import Intro from "./components/Intro";
import Skill_list from "./components/Skill_list";
function App() {
  return (
    <>
    <h1 style={{marginLeft:'130px',marginTop:'20px',color:'#d90429',fontSize:'50px'}}>Skill Card</h1>
    <div className="card">
        <span></span>
        <Avater/>
        <Intro/>
        <Skill_list/>
    </div>
    </>
  );
}

export default App;
