import React from 'react';
import Table from "components/Table/Table";
import Box from "components/Box/Box";

function TasksCurrent() {
	const columns = [
		{
			name: "Name",
			width: 30,
			key: 1,
		},
		{
			name: "Category",
			width: 25,
			key: 2
		},
		{
			name: "Date Execution",
			width: 25,
			key: 3
		},
		{
			name: "Action",
			width: 20,
			key: 4
		}
	];
	
	const data = [
		{
			id: '1',
			name: 'Create React App',
			category: "Yes",
			deadline: "25.30.05 15:30"
		},
		{
			id: '2',
			name: 'Create React App',
			category: null,
			deadline: "25.30.05 15:30"
		},
		{
			id: '3',
			name: 'Create React App',
			category: null,
			dateExecution: "25.30.05 15:30"
		},
	];
	
	return (
		<Box>
			<h2>Completed tasks</h2>
			<Table columns={columns}>
				{data.map(element =>
					<tr key={element.id}>
						<td>{element.name}</td>
						<td>{element.category}</td>
						<td>{element.dateExecution}</td>
						<td><a href="#t">Delete</a></td>
					</tr>
				)}
			</Table>
		</Box>
	);
}

export default TasksCurrent;