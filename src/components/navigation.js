/** @format */

import React, { useState } from "react";
import logo from "../images/logo.png";
import "../css/navigation.css";

export const Navigation = () => {
	const [navColor, setNavColor] = useState({
		isScrolled: "false",
		css: "nav navbar navbar-expand-lg  fixed-top scrolled",
	});
	document.addEventListener("scroll", () => {});
	return (
		<>
			<nav className={navColor.css}>
				<a className="navbar-brand" href="#main_section">
					GO Green
					<img
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt=""
						loading="lazy"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-leaf"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" href="#main_section">
								Let's Breathe
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#sec_section">
								Green Vitality
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#growing_plant">
								Plant Seeds
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#third_section">
								Green City Solution
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#fourth_section">
								Restoration
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#footer_section">
								Contact us
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
