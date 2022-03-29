import React from "react";

import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Header title="Movie Tinder" />
			<Movies />
			<Footer message="This app is made by Jakub Domaradzki for reqruitment process, for Rumble Fish :)" />
		</>
	);
}

export default App;
