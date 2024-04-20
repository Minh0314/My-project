const initialState = {
  columns: [],
  tasks: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch/column": {
      return {
        ...state,
        columns: action.payload,
      };
    }
    case "fetch/task": {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case "add/column": {
      return { ...state, columns: [...state.columns, action.payload] };
    }
    case "delete/column": {
      const updatedTasks = state.tasks.filter(
        (task) => task.column !== action.payload
      );
      const columnUpdate = state.columns.filter(
        (column) => column._id !== action.payload
      );
      return { ...state, columns: columnUpdate, task: updatedTasks };
      // return {...state,column :}
    }
    case "add/task": {
   
      const { column, content, columnName } = action.payload;
      const newTask = { column, content, columnName };
      return { ...state, tasks: [...state.tasks, newTask] };
    }

    case "delete/task": {
      const taskId = action.payload;
      // Filter out the task with the given taskId

      const updatedTasks = state.tasks.filter((task) => task._id !== taskId);
      return { ...state, tasks: updatedTasks };
    }
  
    default: {
      return state;
    }
  }
};
