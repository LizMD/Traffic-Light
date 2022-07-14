import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home () {
	const [selectedColor, setSelectedColor] = useState("red");
	// let selectedColor = "green";

	return (
		<div className="traffic-light">
			<div 
			onClick={() => setSelectedColor("red")}
			className={"light red"+((selectedColor === "red") ? " glow-red" : "")}></div>
			<div 
			onClick={() => setSelectedColor("yellow")}
			className={"light yellow"+((selectedColor === "yellow") ? " glow-yellow" : "")}></div>
			<div 
			onClick={() => setSelectedColor("green")}
			className={"light green"+((selectedColor === "green") ? " glow-green" : "")}></div>
		</div>
	);
};

export default Home;
