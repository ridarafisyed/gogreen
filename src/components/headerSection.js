/** @format */

import React from "react";

import "../css/headerSection.css";

export const HeaderSection = () => {
	return (
		<>
			<div className="row headerSection align-items-center">
				<div className="col col-sm-6 mx-auto">
					<h1 className="display-3 text-center">Let's Breathe!</h1>
					<p className="lead text-center">
						Plant More Trees <br />
						<br />
						<button className="btn btn-success ">Click Here</button>
					</p>
				</div>
				<div className="col col-sm-6"></div>
			</div>
		</>
	);
};
