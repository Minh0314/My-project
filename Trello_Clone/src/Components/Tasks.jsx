import React, { useState, useId, useCallback, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addColumn, deleteColumn } from "../redux/action/columnAction";
import { debounce } from "lodash";

import { v4 as uuidv4 } from "uuid";
import { addTaskAndUpdateServer } from "../API/postTaskApi";

import { deleteColumnAndTasks } from "../API/postTaskApi";
import { editNameColumn } from "../API/EditColumnsApi";
import { editNameTask } from "../API/editTaskApi";
import Loading from "../Pages/LoadingPage";
import TaskList from "./TaskList";
//dnd kit

import { verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable, SortableContext } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Tasks({ column, taskList }) {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const [editingColumn, setEditingColumn] = useState(null);

  const columnInputRef = useRef(null); // Ref cho ô input của column
  const taskInputRef = useRef(null); // Ref cho ô input của task
  // console.log("taskList : ", taskList);
  const handleAddTask = (column) => {
    const taskLength = taskList.length;
    const _id = uuidv4();
    const newData = {
      _id: _id,
      column: column.columnName,
      content: `Task ${taskLength + 1}`,
      columnName: column.columnName,
    };
    dispatch(addTaskAndUpdateServer(newData));
  };

  const handleDeleteTask = (taskId, columnName) => {
    console.log(taskId);
    console.log(columnName);
    dispatch({ type: "delete/task", payload: taskId });
    dispatch(addTaskAndUpdateServer());
  };

  const debouncedEdit = useCallback(
    debounce((type, ...args) => {
      if (type === "column") {
        const [prevName, newColumnName] = args;
        dispatch(editNameColumn(newColumnName, prevName));

        setEditingColumn(null); // Đóng form input sau khi chỉnh sửa
      }
      if (type === "task") {
        const [idTask, newTaskName] = args;
        dispatch(editNameTask(idTask, newTaskName));
        console.log("id", idTask, "ten mơi", newTaskName), setEditingTask(null); // Đóng form input sau khi chỉnh sửa
      }
    }, 2000),
    []
  );

  const handleEditTaskName = (e, id) => {
    const idTask = id;
    const NewTaskName = e.target.value;
    const type = "task";

    debouncedEdit(type, idTask, NewTaskName);
  };
  const handleEditTask = (task) => {
    setEditingTask(task);
  };
  // console.log("taskList ", taskList);
  return (
    <div className="flex flex-col">
      <SortableContext
        items={taskList.map((c) => c._id)}
        strategy={verticalListSortingStrategy}
      >
        {taskList
          .filter((task) => task.column === column.columnName)
          .map((task) => (
            <TaskList task={task} column={column} key={task._id}></TaskList>
          ))}
      </SortableContext>
    </div>
  );
}

export default Tasks;
