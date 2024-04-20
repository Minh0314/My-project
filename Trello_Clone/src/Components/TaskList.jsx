import React, { useState, useId, useCallback, useRef } from "react";
import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { addTaskAndUpdateServer } from "../API/postTaskApi";
import { editNameTask } from "../API/editTaskApi";
import { setTask } from "../redux/action/taskAction";
//dnd kit
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function TaskList({ task, column }) {
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const taskInputRef = useRef(null); // Ref cho ô input của task

  const taskList = useSelector((state) => state.todoState.tasks);

  const handleAddTask = (column) => {
    console.log(column);
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
  //dnd kit

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task._id,
    data: { ...task },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? "1px solid #2ecc71" : undefined,
  };

  return (
    <div
      key={task._id}
      className="flex items-center justify-between mb-2 bg-blue-100 p-2 rounded-md"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {editingTask && editingTask._id === task._id ? (
        <input
          onChange={(e) => handleEditTaskName(e, task._id)}
          type="text"
          defaultValue={task.content}
        />
      ) : (
        <span
          onClick={() => {
            handleEditTask(task);
          }}
          className="text-gray-800 cursor-pointer w-full border-indigo-600  text-ellipsis overflow-hidden"
        >
          {task.content}
        </span>
      )}

      <button
        className="btn "
        onClick={() => {
          handleDeleteTask(task._id, column.columnName);
        }}
      >
        <i className="fa-regular fa-trash-can text-black "></i>
      </button>
    </div>
  );
}

export default TaskList;
