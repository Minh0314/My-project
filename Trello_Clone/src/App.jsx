import Login from "./Components/Login";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const isLogin = useSelector((state) => state.loginState.isLogin);

  return (
    <>
      <ToastContainer />
      {isLogin ? <Dashboard /> : <Login />}
    </>
  );
}
