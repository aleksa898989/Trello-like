import Item from "../ListItem/ListItem";
import { useDispatch } from "react-redux";
import actions from "redux/actions/actions";

import styles from "./List.module.scss";

const List = ({ list }) => {
  const dispatch = useDispatch();

  const deleteTask = (id) => dispatch(actions.deleteTask(id));

  const deleteItem = (task) => {
    deleteTask(task.id);
  };

  let todoList = list.filter((x) => x.status === "todo");
  let inProgressList = list.filter((x) => x.status === "in_progress");
  let doneList = list.filter((x) => x.status === "done");

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <p>To do</p>

        {todoList.map((item) => (
          <Item deleteItem={deleteItem} item={item} key={item.id} />
        ))}
      </div>
      <div className={styles.item}>
        <p>In progress</p>

        {inProgressList.map((item) => (
          <Item deleteItem={deleteItem} item={item} key={item.id} />
        ))}
      </div>
      <div className={styles.item}>
        <p>Done</p>

        {doneList.map((item) => (
          <Item deleteItem={deleteItem} item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
