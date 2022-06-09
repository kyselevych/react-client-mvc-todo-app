import React from 'react';

import {Space, Field, Button} from "components";

import './categoryFilter.scss';

function CategoryFilter() {
	const categories = [
		{
			id: 0,
			name: "Education"
		},
		{
			id: 1,
			name: "Rest"
		}
	]

	return (
		<form className="category-filter-form">
			<Space direction="horizontal" style={{justifyContent: "center"}}>
				<Field>
					<select
						placeholder="Category"
						className="field"
					>
						{categories.map(category =>
							<option key={category.id} value={category.id}>{category.name}</option>
						)}
					</select>
				</Field>
				<Button>Filter</Button>
			</Space>
		</form>
	);
}

export default CategoryFilter;