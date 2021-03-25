import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import Header from "./components/header/Header";


function App() {
  return (
    <div className="app">
      <Slider /> 
      <NavBar /> 
      <Header />
    </div>
  );
}

export default App;
