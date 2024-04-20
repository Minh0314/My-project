export const setColumn = (columns) => {
  return {
    type: "fetch/column",
    payload: columns,
  };
};
export const addColumn = (newColumn) => {
  return {
    type: "add/column",
    payload: newColumn,
  };
};
export const deleteColumn = (idColumn) => {
  return {
    type: "delete/column",
    payload: idColumn,
  };
};
