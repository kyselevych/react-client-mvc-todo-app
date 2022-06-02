import React from 'react';
import {Routes, Route} from "react-router-dom";
import Tasks from "pages/Tasks/Tasks";
import MainLayout from "pages/MainLayout/MainLayout";
import Categories from "pages/Categories/Categories";
import EditCategory from "pages/EditCategory/EditCategory";

function AppRouter() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index element={<Tasks/>}/>
				<Route path="tasks" element={<Tasks/>}/>
				<Route path="categories" element={<Categories/>} />
				<Route path="categories/edit" element={<EditCategory/>}/>
			</Route>
		</Routes>
	);
}

export default AppRouter;