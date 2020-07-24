/** @format */

import React from "react";
import { HeaderSection } from "./headerSection";
import { Navigation } from "./navigation";
import { PollutionSection } from "./pollutionSection";
import { SecSection } from "./secSection";
import { FourthSection } from "./fourthSection";
import { GrowingPlant } from "./growingPlant";

const index = () => {
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="main_section" id="main_section">
				<HeaderSection />
			</div>
			<div className="sec_section" id="sec_section">
				<SecSection />
			</div>
			<div className="growing_plant" id="growing_plant">
				<GrowingPlant />
			</div>
			<div className="third_section" id="third_section">
				<PollutionSection />
			</div>
			<div className="fourth_section" id="fourth_section">
				<FourthSection />
			</div>
		</>
	);
};

export default index;
