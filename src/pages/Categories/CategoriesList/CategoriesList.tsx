import React from 'react';
import Table from "components/Table/Table";
import Box from "components/Box/Box";
import Space from "components/Space/Space";

function CategoriesList() {
	const columns = [
		{
			name: "Name",
			width: 70,
			key: 1,
		},
		{
			name: "Action",
			width: 30,
			key: 2
		}
	];
	
	const data = [
		{
			id: '1',
			name: 'Education',
		},
		{
			id: '2',
			name: 'Rest',
		},
		{
			id: '3',
			name: 'Entertainment',
		},
	];
	
	return (
		<Box>
			<h2>Categories</h2>
			<Table columns={columns}>
				{data.map(element =>
					<tr key={element.id}>
						<td>{element.name}</td>
						<td>
                            <Space direction="horizontal">
                                <a href="#">Edit</a>
                                <a href="#">Delete</a>
                            </Space>
                        </td>
					</tr>
				)}
			</Table>
		</Box>
	);
}

export default CategoriesList;