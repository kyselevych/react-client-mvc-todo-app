import React from 'react';
import moment from "moment";

import {Table, Box, Button, Space} from "components";

import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import {sortDateCompare} from "helpers/sortDateCompare";

function TasksCurrent() {
    const {removalTask} = useActions();
    const categories = useTypedSelector(state => state.categories);
    const completedTasks = useTypedSelector(state => state.tasks.filter(task => task.isDone))
        .sort(sortDateCompare("dateExecution", true));

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
                {completedTasks?.map(task =>
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>
                            {
                                !isNaN(task.categoryId as number)
                                    ? categories.find(category => category.id === task.categoryId)?.name
                                    : null
                            }
                        </td>
                        <td>{task.dateExecution ? moment(task.dateExecution).format("DD.MM.YYYY HH:mm") : null}</td>
                        <td>
                            <Space direction="horizontal">
                                <Button
                                    size="small"
                                    styleType="secondary"
                                    onClick={() => removalTask(task.id)}
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