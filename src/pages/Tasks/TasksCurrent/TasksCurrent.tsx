import React from 'react';
import Table from "components/Table/Table";
import Box from "components/Box/Box";
import Button from "components/Button/Button";
import Space from "components/Space/Space";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {deleteTask, performTask} from "store/actions/taskActions";
import moment from "moment";
import {sortDateCompare} from "../../../helpers/sortDateCompare";

function TasksCurrent() {
    const dispatch = useDispatch();
    const currentTasks =
        useTypedSelector(state => state.tasks.tasks.filter(task => !task.completed))
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
                {currentTasks.map(task =>
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.category?.name}</td>
                        <td>{task.deadline ? moment(task.deadline).format("DD.MM.YYYY HH:mm") : null}</td>
                        <td>
                            <Space direction="horizontal">
                                <Button
                                    size="small"
                                    styleType="secondary"
                                    onClick={() => dispatch(performTask(task.id))}
                                >Perform</Button>
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