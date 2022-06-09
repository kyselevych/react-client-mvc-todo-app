import React from 'react';
import Table from "components/Table/Table";
import Box from "components/Box/Box";
import Button from "components/Button/Button";
import {useTypedSelector} from "hooks/useTypedSelector";
import Space from "components/Space/Space";
import {deleteTask} from "store/actions/taskActions";
import {useDispatch} from "react-redux";
import moment from "moment";
import {sortDateCompare} from "helpers/sortDateCompare";

function TasksCurrent() {
    const dispatch = useDispatch();
    const completedTasks =
        useTypedSelector(state => state.tasks.tasks.filter(task => task.completed))
            .sort(sortDateCompare("dateExecution"));

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
                        <td>{task.category?.name}</td>
                        <td>{task.dateExecution ? moment(task.dateExecution).format("DD.MM.YYYY HH:mm") : null}</td>
                        <td>
                            <Space direction="horizontal">
                                <Button
                                    size="small"
                                    styleType="secondary"
                                    onClick={() => dispatch(deleteTask(task.id))}
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