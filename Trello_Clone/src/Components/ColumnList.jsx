import React, {
  useEffect,
  useState,
  useId,
  useCallback,
  useRef,
  useMemo,
} from "react";
import fetchTaskApi from "../API/fetchTaskApi";
import { useSelector, useDispatch } from "react-redux";
import { setColumn, deleteColumn } from "../redux/action/columnAction";
import { debounce } from "lodash";

import { setTask } from "../redux/action/taskAction";
import { v4 as uuidv4 } from "uuid";
import { addTaskAndUpdateServer } from "../API/postTaskApi";
import { deleteColumnAndTasks } from "../API/postTaskApi";
import { editNameColumn } from "../API/EditColumnsApi";
import { editNameTask } from "../API/editTaskApi";
import Tasks from "./Tasks";

//dnd kit
import { horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable, SortableContext } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function ColumnList({ column }) {
  const [editingColumn, setEditingColumn] = useState(null);
  const taskList = useSelector((state) => state.todoState.tasks);
  const columnInputRef = useRef(null);

  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const handleDeleteColumn = (e, column) => {
    e.preventDefault();
    dispatch(deleteColumn(column._id));
    dispatch(deleteColumnAndTasks(column.columnName));
  };

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

  const debouncedEdit = useCallback(
    debounce((type, ...args) => {
      if (type === "column") {
        const [prevName, newColumnName] = args;
        dispatch(editNameColumn(newColumnName, prevName));
        setEditingColumn(null);
      }
      if (type === "task") {
        const [idTask, newTaskName] = args;
        dispatch(editNameTask(idTask, newTaskName));
        setEditingTask(null);
      }
    }, 2000),
    []
  );

  const handleEditColumnName = (e, prevName) => {
    const newColumnName = e.target.value;
    const type = "column";
    if (newColumnName !== "") setEditingTask(null);
    debouncedEdit(type, newColumnName, prevName);
  };

  const handleEditColumn = useCallback((column) => {
    setEditingColumn(column);
    if (columnInputRef.current) {
      columnInputRef.current.focus();
    }
  }, []);
  //dnd kit
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column._id,
    data: { ...column },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    // height: "100%",
    opacity: isDragging ? 0.5 : undefined,
  };

  return (
    <div
      key={column._id}
      className="flex flex-col bg-white rounded-lg max-w-64 min-w-64 mx-4 my-4 p-6 border-solid border-2 border-indigo-600 h-fit"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div>
        <div
          className="flex flex-row justify-between align-center"
          onClick={() => handleEditColumn(column)}
        >
          {editingColumn && editingColumn._id === column._id ? (
            <input
              className="border-solid border-2 border-red-500  "
              type="text"
              placeholder={column.columnName}
              onChange={(e) => handleEditColumnName(e, column.columnName)}
              ref={columnInputRef}
            />
          ) : (
            <h3
              className="text-lg font-bold mb-2 cursor-pointer"
              onClick={() => handleEditColumn(column)}
            >
              {column.columnName}
            </h3>
          )}
          <button
            onClick={(e) => {
              handleDeleteColumn(e, column);
            }}
            className=" hover:bg-red-500 font-bold px-2 rounded "
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
        <Tasks column={column} taskList={taskList}></Tasks>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 "
          onClick={(e) => handleAddTask(column)}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}

export default ColumnList;
