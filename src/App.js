import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainHeader from "./components/MainHeader/MainHeader";
import Offersection from "./components/offerSection/Offersection";
import Review from "./components/review/Review";
import TeamMembers from "./components/TeamMembers/TeamMembers";

function App() {
  return (
    <div className="app">
      <MainHeader />
      <Header />
      <Offersection />
      <TeamMembers />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
