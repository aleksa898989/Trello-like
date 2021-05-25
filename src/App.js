import { useSelector, useDispatch } from "react-redux";
import appActions from "./redux/actions/actions";
import Board from "./components/board";
import "./main.scss";

const App = () => {
  const list = useSelector((store) => store?.reducer?.list);
  const dispatch = useDispatch();
  const add_task = (task) => dispatch(appActions.add_task(task));
  const delete_task = (id) => dispatch(appActions.delete_task(id));

  return <Board list={list} add_task={add_task} delete_task={delete_task} />;
};

export default App;
