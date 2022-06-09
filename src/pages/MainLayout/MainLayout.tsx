import React from "react";

import {Outlet} from "react-router-dom";
import {Header} from "components";

function MainLayout() {
	return (
		<>
			<Header/>
			<div className="container" style={{padding: "50px 0"}}>
				<Outlet/>
			</div>
		</>
	);
}

export default MainLayout;