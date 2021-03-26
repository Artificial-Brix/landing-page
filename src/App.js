import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import Header from "./components/header/Header";
import TeamMembers from './components/TeamMembers/TeamMembers';

function App() {
  return (
    <div className="app">
      <Slider />
      <NavBar />
      <Header />
      <TeamMembers />
    </div>
  );
}

export default App;
