/** @format */

import React from "react";
import pollution from "../images/pollution.svg";

export const PollutionSection = () => {
	return (
		<>
			<div className="row align-items-center">
				<div className="col col-md-6">
					<img src={pollution} alt="Green City Pollution Free setup" />
				</div>
				<div className="col col-md-6">
					<h1 className="display-3 text-center">Pollution Free Envirnment</h1>
					<p className="lead text-center">
						Dont boost WiFi signals they just give signal <br />
						<br />
						<button className="btn btn-success ">Learn More</button>
					</p>
				</div>
			</div>
		</>
	);
};
