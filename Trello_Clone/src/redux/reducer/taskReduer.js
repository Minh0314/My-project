import axiosClient from "../../API/axiosCLient";
export const removeTaskAndUpdateServer = (columnName) => {
  return async (dispatch, getState) => {
    try {
      // Lấy danh sách tasks từ store
      const { tasks } = getState().todoState;

      // Lọc ra các task có cùng column với columnName
      const tasksToDelete = tasks.filter((task) => task.column === columnName);

      // Xóa các task có cùng column với columnName khỏi store
      tasksToDelete.forEach((task) => {
        dispatch({ type: "delete/task", payload: task._id });
      });

      // Lấy danh sách tasks còn lại sau khi xóa
      const remainingTasks = tasks.filter((task) => task.column !== columnName);

      // Chuẩn bị dữ liệu để gửi lên server (chỉ gửi các task còn lại)
      const updatedState = remainingTasks.map((task) => ({
        column: task.column,
        content: task.content,
        columnName: task.column,
      }));
      console.log(updatedState);
      //   Gửi request POST lên server với danh sách tasks còn lại
      const response = await axiosClient.post("/tasks", updatedState);
      console.log("Response from server:", response);
    } catch (error) {
      console.log("Error removing tasks and updating server:", error);
    }
  };
};
