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
    case "add/task": {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    default: {
      return state;
    }
  }
};
