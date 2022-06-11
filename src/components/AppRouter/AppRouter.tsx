import React from 'react';
import {Routes, Route} from "react-router-dom";

import {Tasks, MainLayout, Categories} from 'pages';

function AppRouter() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index element={<Tasks/>}/>
				<Route path="tasks" element={<Tasks/>}/>
				<Route path="categories" element={<Categories/>} />
			</Route>
		</Routes>
	);
}

export default AppRouter;