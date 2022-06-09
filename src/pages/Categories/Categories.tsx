import React from 'react';

import {Space} from "components";

import CategoriesList from "./CategoriesList/CategoriesList";
import CreateCategory from "./CreateCategory/CreateCategory";

function Categories() {
	return (
		<Space>
            <CreateCategory/>
            <CategoriesList/>
		</Space>
	);
}

export default Categories;