/** @format */

import React from "react";
import growingplant from "../images/growingPlantSeries3.svg";
import useWebAnimations from "@wellyshen/use-web-animations";
import "../css/growingPlant.css";

export const GrowingPlant = () => {
	const plantFrames = [
		{ transform: "translateY(-100%)" },
		{ transform: "translateY(0%)" },
	];
	const plantTiming = {
		easing: "steps(8, end)",
		direction: "reverse",
		duration: 4000,
		playbackRate: 1,
		iterations: Infinity,
	};

	const growingPlant = useWebAnimations({
		keyframes: plantFrames,
		timing: plantTiming,
	});
	return (
		<>
			<div className="row align-items-center growing_plant_container">
				<div className="col col-md-6">
					<h1 className="display-3 text-center">Pollution Free Envirnment</h1>
					<p className="lead text-center">
						Dont boost WiFi signals they just give signal <br />
						<br />
						<button className="btn btn-success ">Learn More</button>
					</p>
				</div>
				<div className="col col-md-6 growing_plant">
					<img
						src={growingplant}
						className="growing_plant_series"
						alt="Green City Pollution Free setup"
						ref={growingPlant.ref}
					/>
				</div>
			</div>
		</>
	);
};
