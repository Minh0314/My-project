import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addColumn } from "../redux/action/columnAction";
function Header() {
  const dispatch = useDispatch();
  const columnList = useSelector((state) => state.todoState.columns);
  const handleAddColumn = () => {
    const columLength = columnList.length;

    const id = uuidv4();
    dispatch(
      addColumn({
        _id: id,
        column: id,
        columnName: `Column ${columLength + 1}`,
      })
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center py-4 px-4 bg-cyan-800 text-white">
        <h1 className="text-lg font-bold">Trello Clone</h1>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={handleAddColumn}
        >
          + Add Column
        </button>
      </div>
    </div>
  );
}

export default Header;
