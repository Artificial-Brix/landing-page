import "./App.css";
import Header from "./components/header/Header";
import MainHeader from "./components/MainHeader/MainHeader";
import Review from "./components/review/Review";
import TeamMembers from "./components/TeamMembers/TeamMembers";

function App() {
	return (
		<div className="app">
			<MainHeader />
			<Header />
			<TeamMembers />
			<Review />
		</div>
	);
}

export default App;
