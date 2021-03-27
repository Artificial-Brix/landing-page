import "./App.css";
import Header from "./components/header/Header";
import NavBar from "./components/NavBar/NavBar";
import Review from "./components/review/Review";
import Slider from "./components/Slider/Slider";

function App() {
	return (
		<div className="app">
			<Slider />
			<NavBar />
			<Header />
			<Review />
		</div>
	);
}

export default App;
