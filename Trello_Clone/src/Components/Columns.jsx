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
import {
  setColumn,
  addColumn,
  deleteColumn,
} from "../redux/action/columnAction";
import { debounce } from "lodash";
import ColumnList from "./ColumnList";
import { setTask, deleteTask } from "../redux/action/taskAction";
import { v4 as uuidv4 } from "uuid";
import { addTaskAndUpdateServer } from "../API/postTaskApi";
import { removeTaskAndUpdateServer } from "../redux/reducer/taskReduer";
import { deleteColumnAndTasks } from "../API/postTaskApi";
import { editNameColumn } from "../API/EditColumnsApi";
import { editNameTask } from "../API/editTaskApi";
import TaskList from "./Tasks";
import Loading from "../Pages/LoadingPage";

//dnd kit
import { horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { useSortable, SortableContext } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Columns({ columnList, taskList }) {
  // const columnList = useSelector((state) => state.todoState.columns);
  // const taskList = useSelector((state) => state.todoState.tasks);
  const columnListId = useMemo(
    () => columnList?.map((col) => col._id),
    [columnList]
  );
  // console.log("column mặc định : ", columnList);

  const dispatch = useDispatch();
  const [editingColumn, setEditingColumn] = useState(null);
  const [setEditingTask] = useState(null);
  const columnInputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const handleDeleteColumn = (e, column) => {
    e.preventDefault();
    dispatch(deleteColumn(column._id));
    dispatch(deleteColumnAndTasks(column.columnName));
  };

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

  return (
    <div>
      <div className="flex  overflow-x-auto h-screen bg-gradient-to-r from-sky-500 to-indigo-500 ">
        <SortableContext
          items={columnList.map((c) => c._id)}
          strategy={horizontalListSortingStrategy}
        >
          {columnList.map((column) => (
            <ColumnList column={column} key={column._id}>
              {" "}
            </ColumnList>
          ))}
        </SortableContext>
      </div>
    </div>
  );
}
export default Columns;
