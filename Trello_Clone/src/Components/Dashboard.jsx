import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Columns from "./Columns";
import {
  setColumn,
  addColumn,
  deleteColumn,
} from "../redux/action/columnAction";
import { setTask, deleteTask } from "../redux/action/taskAction";
import { toast } from "react-toastify";
import fetchTaskApi from "../API/fetchTaskApi";
import Loading from "../Pages/LoadingPage";
import { editColumnTask } from "../API/editTaskApi";
import ColumnList from "./ColumnList";
import TaskList from "./TaskList";
//dnd kit
import {
  DndContext,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";

import { arrayMove } from "@dnd-kit/sortable";
const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  TASK: "ACTIVE_DRAG_ITEM_TYPE_TASK",
};
function Dashboard() {
  const columnList = useSelector((state) => state.todoState.columns);
  const taskList = useSelector((state) => state.todoState.tasks);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [activeDragItemID, setActiveDragItemID] = useState([null]);
  const [activeDragItemType, setActiveDragItemType] = useState([null]);
  const [activeDragItemData, setActiveDragItemData] = useState([null]);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetchTaskApi.fetchTask();
      try {
        if (response.data) {
          const columns = response.data.columns;
          const tasks = response.data.tasks;

          dispatch(setColumn(columns));
          dispatch(setTask(tasks));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTask();
  }, [dispatch]);
  // dnd kit

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const sensors = useSensors(pointerSensor);
  const handleDragStart = (e) => {
    setActiveDragItemID(e?.active?.id);
    setActiveDragItemType(
      e?.active?.data?.current?.columnName
        ? ACTIVE_DRAG_ITEM_TYPE.COLUMN
        : ACTIVE_DRAG_ITEM_TYPE.TASK
    );
    setActiveDragItemData(e?.active?.data?.current);
  };
  const handleDragOver = (e) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return;
    //task

    const { active, over } = e;
    if (!active || !over) return;
    const {
      id: activeDraggingTaskId,
      data: { current: activeDraggingTaskData },
    } = active;

    const { data } = over;
    const { column, columnName } = over?.data?.current;

    const newColumn = over.data.current.column;
    if (columnName) {
      const updatedTasks = taskList.map((t) => {
        if (t._id === activeDraggingTaskId) {
          return {
            ...t,
            column: columnName,
          };
        }
        return t;
      });
      dispatch(setTask(updatedTasks));

      return;
    }
    if (column) {
      const updatedTasks = taskList.map((t) => {
        if (t._id === activeDraggingTaskId) {
          return {
            ...t,
            column: column,
          };
        }
        return t;
      });
      dispatch(setTask(updatedTasks));
    }
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (!over) return;
    const draggingItemType = activeDragItemType;
    if (active.id !== over.id) {
      if (ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
        const oldIndex = columnList.findIndex((c) => c._id === active.id);

        const newIndex = columnList.findIndex((c) => c._id === over.id);

        const newColumn = arrayMove(columnList, oldIndex, newIndex);

        dispatch(setColumn(newColumn));
      }
      if (ACTIVE_DRAG_ITEM_TYPE.TASK) {
        //kéo cùng cột
        if (e.active.data.current.column === e.over.data.current.column) {
          const oldIndex = taskList.findIndex((c) => c._id === active.id);

          const newIndex = taskList.findIndex((c) => c._id === over.id);
          const newTaskList = arrayMove(taskList, oldIndex, newIndex);
          dispatch(setTask(newTaskList));
        }
        //khác cột
        if (e.active.data.current.column !== e.over.data.current.column) {
          dispatch(editColumnTask(taskList));
        }
      }
    }
    dispatch(editColumnTask(taskList));
    setActiveDragItemID(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <div className="flex flex-col w-full ">
      <Header></Header>

      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
        sensors={sensors}
      >
        <Columns columnList={columnList} taskList={taskList}></Columns>
        <DragOverlay dropAnimation={dropAnimation}>
          {activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <ColumnList column={activeDragItemData}></ColumnList>
          )}
          {activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.TASK && (
            <TaskList task={activeDragItemData}></TaskList>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

export default Dashboard;
