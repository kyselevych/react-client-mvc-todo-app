import React from 'react';
import moment from "moment";

import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import {sortDateCompare} from "helpers/sortDateCompare";

import {Table, Box, Button, Space} from "components";

function TasksCurrent() {
    const {performTask, removalTask} = useActions();
    const categories = useTypedSelector(state => state.categories);
    const currentTasks = useTypedSelector(state => state.tasks.filter(task => !task.isDone))
        .sort(sortDateCompare("deadline"));

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
            name: "Deadline",
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
            <h2>Current tasks</h2>
            <Table columns={columns}>
                {currentTasks?.map(task =>
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{!isNaN(task.categoryId as number) ? categories.find(category => category.id === task.categoryId)?.name : null}</td>
                        <td>{task.deadline ? moment(task.deadline).format("DD.MM.YYYY HH:mm") : null}</td>
                        <td>
                            <Space direction="horizontal">
                                <Button
                                    size="small"
                                    styleType="secondary"
                                    onClick={() => performTask(task.id)}
                                >Perform</Button>
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