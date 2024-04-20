import React from "react";
import { useSelector, useDispatch } from "react-redux";
export const SortColumn = (active, over) => {
  console.log("bên SortColumn : =>>> ", active, over);
  return {
    type: "SORT_COLUMN",
    payload: {
      active: active,
      over: over,
    },
  };
};
