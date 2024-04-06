import Login from "./Components/Login";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./Components/Dashboard";
export default function App() {
  const isLogin = useSelector((state) => state.loginState.isLogin);
  console.log(isLogin);
  return <>{isLogin ? <Dashboard /> : <Login />}</>;
}
