import React from 'react';
import Table from "components/Table/Table";
import Box from "components/Box/Box";
import Button from "components/Button/Button";
import {useTypedSelector} from "hooks/useTypedSelector";
import Space from "components/Space/Space";

function TasksCurrent() {
    const tasks = useTypedSelector(state => state.tasks.tasks);

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
	
	return (
		<Box>
			<h2>Completed tasks</h2>
			<Table columns={columns}>
				{tasks?.map(element =>
					<tr key={element.id}>
						<td>{element.name}</td>
						<td>{element.category}</td>
						<td>{element.dateExecution}</td>
                        <td>
                            <Space direction="horizontal">
                                <Button size="small" styleType="secondary">Perform</Button>
                                <Button size="small" styleType="secondary">Delete</Button>
                            </Space>
                        </td>
					</tr>
				)}
			</Table>
		</Box>
	);
}

export default TasksCurrent;