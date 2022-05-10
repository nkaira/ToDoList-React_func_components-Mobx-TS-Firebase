import React from "react";
import { observer } from "mobx-react";

import { ITaskList } from "Interface/ITask";
import Task from "./Task";
import styles from "./taskList.module.scss";

const TaskList: React.FC<ITaskList> = ({ paginatedTasks, onComplete, onModalShow }) => {

    return (
        <ul className={styles.container}>
            {paginatedTasks.map(task => (
                <Task
                    key={task.taskId}
                    description={task.title}
                    isComplete={task.complete}
                    id={task.taskId}
                    onModalShow={() => onModalShow(task.taskId)}
                    onComplete={() => onComplete(task.taskId)}
                />
            ))}
        </ul>
    );
};

export default observer(TaskList);