import { useSelector, useDispatch } from "react-redux";
import actions from "./redux/actions/actions";
import Board from "./components/board";
import "./main.scss";

const App = () => {
  const list = useSelector((store) => store?.reducer?.list);
  const dispatch = useDispatch();
  const add_task = (task) => dispatch(actions.add_task(task));
  const delete_task = (id) => dispatch(actions.delete_task(id));

  return <Board list={list} add_task={add_task} delete_task={delete_task} />;
};

export default App;
