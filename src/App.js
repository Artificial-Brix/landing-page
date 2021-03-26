import './App.css';
import Header from "./components/header/Header";
import TeamMembers from './components/TeamMembers/TeamMembers';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  return (
    <div className="app">
      <MainHeader /> 
      <Header />
      <TeamMembers />
    </div>
  );
}

export default App;
