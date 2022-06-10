import {Task} from "../types/taskTypes";

export const getFilteredTasks = (tasks: Task[], filterValue: number | null) => {
    if (filterValue === null) return tasks;
    return tasks.filter(task => task.categoryId === filterValue);
}