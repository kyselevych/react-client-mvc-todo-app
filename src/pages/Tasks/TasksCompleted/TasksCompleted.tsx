import React from 'react';
import moment from "moment";

import {Table, Box, Button, Space} from "components";

import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";

import {sortDateCompare} from "helpers/sortDateCompare";
import {getFilteredTasks} from "helpers/getFilteredTasks";

function TasksCurrent() {
    const {deleteTask} = useActions();
    const categories = useTypedSelector(state => state.categories.categories);
    const filterCategoryId = useTypedSelector(state => state.filteredTasks.categoryId)
    const completedTasks =
        useTypedSelector(state => state.tasks.tasks.filter(task => task.completed))
            .sort(sortDateCompare("dateExecution",true));
    const filteredCompletedTasks = getFilteredTasks(completedTasks, filterCategoryId);

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
                {filteredCompletedTasks?.map(task =>
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{!isNaN(task.categoryId as number) ? categories.find(category => category.id === task.categoryId)?.name : null}</td>
                        <td>{task.dateExecution ? moment(task.dateExecution).format("DD.MM.YYYY HH:mm") : null}</td>
                        <td>
                            <Space direction="horizontal">
                                <Button
                                    size="small"
                                    styleType="secondary"
                                    onClick={() => deleteTask(task.id)}
                                >Delete</Button>
                            </Space>
                        </td>
                    </tr>
                )}
            </Table>
        </Box>
    );
}

export default TasksCurrent;