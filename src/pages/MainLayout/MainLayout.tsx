import React, {useEffect} from "react";

import {useActions} from "hooks/useActions";

import {Outlet} from "react-router-dom";
import {Header} from "components";

function MainLayout() {
    const {fetchCategories} = useActions();

    useEffect(() => {
        fetchCategories();
    }, []);

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