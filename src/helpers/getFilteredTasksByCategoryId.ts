import {Task} from "models/taskModels";

export const getFilteredTasksByCategoryId = (tasks: Task[], categoryId: number | null) => {
    if (categoryId === null) return tasks;
    return tasks.filter(task => task.categoryId === categoryId);
}