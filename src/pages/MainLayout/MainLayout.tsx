import React, {useEffect} from "react";

import {useActions} from "hooks/useActions";

import {Outlet} from "react-router-dom";
import {Header} from "components";
import {useTypedSelector} from "hooks/useTypedSelector";

function MainLayout() {
    const {fetchCategories} = useActions();
    const currentRepository = useTypedSelector(state => state.repositories.currentRepository);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories, currentRepository]);

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