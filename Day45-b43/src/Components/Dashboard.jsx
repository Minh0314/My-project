import React, { useEffect, useState, useId } from "react";
import fetchTaskApi from "../API/fetchTaskApi";
import { useSelector, useDispatch } from "react-redux";
import { setColumn, addColumn } from "../redux/action/columnAction";
import { setTask, addTask } from "../redux/action/taskAction";
import { v4 as uuidv4 } from "uuid";
function Dashboard() {
  const columnList = useSelector((state) => state.todoState.columns);
  const taskList = useSelector((state) => state.todoState.tasks);

  const dispatch = useDispatch();
  console.log("column-bên Dashboard :", columnList);
  console.log("task-bên Dashboard:", taskList);

  const handleAddColumn = () => {
    const id = uuidv4();
    dispatch(
      addColumn({ _id: id, column: "newColumn", columnName: "New Column" })
    );
  };
  const handleAddTask = (columnId) => {
    const id = uuidv4();
    console.log(columnId);
    dispatch(addTask({ _id: id, content: "New content", column: columnId }));
  };
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetchTaskApi.fetchTask();
        console.log(response);
        const columns = response.data.columns;
        const tasks = response.data.tasks;
        console.log("column-Response trả về :", columns);
        console.log("task-Response trả về :", tasks);
        dispatch(setColumn(columns));
        dispatch(setTask(tasks));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTask();
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center py-4 px-4 bg-gray-800 text-white">
        <h2 className="text-lg font-bold">Trello Clone</h2>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={handleAddColumn}
        >
          + Add Column
        </button>
      </div>
      <div className="flex flex-wrap">
        {columnList.map((column) => (
          <div
            key={column._id}
            className="flex flex-col bg-white rounded-lg w-64 mx-4 my-4 p-4 shadow-md border-solid border-2 border-indigo-600"
          >
            <h3 className="text-lg font-bold mb-2">{column.columnName}</h3>
            <div className="flex flex-col">
              {taskList
                .filter((task) => task.column === column.column)
                .map((task) => (
                  <div
                    key={task._id}
                    className="flex items-center justify-between mb-2 bg-blue-100 p-2 rounded-md"
                  >
                    <span className="text-gray-800">{task.content}</span>
                    {/* Button để xóa công việc */}
                  </div>
                ))}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 "
              onClick={(e) => handleAddTask(column._id)}
            >
              + Add Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
