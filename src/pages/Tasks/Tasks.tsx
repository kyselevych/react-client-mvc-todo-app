import React, {useEffect} from 'react';

import {useActions} from "hooks/useActions";
import {useTypedSelector} from "hooks/useTypedSelector";

import {Space} from "components";

import CategoryFilter from "./CategoryFilter/CategoryFilter";
import TasksCurrent from "./TasksCurrent/TasksCurrent";
import TasksCompleted from "./TasksCompleted/TasksCompleted";
import CreateTask from "./CreateTask/CreateTask";

function Tasks() {
    const {fetchTasks} = useActions();
    const filterCategoryId = useTypedSelector(state => state.filterTasks.categoryId);

    useEffect(() => {
        fetchTasks({categoryId: filterCategoryId});
    }, [fetchTasks, filterCategoryId]);

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