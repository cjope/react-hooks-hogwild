import React from "react";
import Nav from "./Nav";
import PigTile from "./PigTile";
import hogs from "../porkers_data";



function App() {

	const porkers = hogs.map((piggy)=>
		<PigTile pig = {piggy}/>
	) //create container





	return (
		<div className="App">
			<Nav />
			{/* <PigTile porkers = {porkers}/> */}
			{porkers}

		</div>
	);
}

export default App;
