import React from 'react';
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import TasksCurrent from "./TasksCurrent/TasksCurrent";
import TasksCompleted from "./TasksCompleted/TasksCompleted";
import Space from "components/Space/Space";
import CreateTask from "./CreateTask/CreateTask";

function Tasks() {
	return (
		<>
            <CreateTask/>
			<CategoryFilter/>
			<Space>
                <TasksCurrent/>
                <TasksCompleted/>
            </Space>
		</>
	);
}

export default Tasks;