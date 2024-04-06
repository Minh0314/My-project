export const setColumn = (columns) => {
  return {
    type: "fetch/column",
    payload: columns,
  };
};
export const addColumn = (newColumn) => {
  console.log(newColumn);
  return {
    type: "add/column",
    payload: newColumn,
  };
};
