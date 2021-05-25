import Draggable from "react-draggable";
import EditModal from "./editItem";
import { useState } from "react";

const Item = ({ item, deleteItem }) => {
  console.log(item);
  const [title, setTitle] = useState(item.title);
  const [user, setUser] = useState({ value: item.user, label: item.user });
  const [status, setStatus] = useState({
    value: item.status,
    label: item.status,
  });
  const [task, setTask] = useState(item.task);
  return (
    <Draggable>
      <div className="item-inner">
        <h3>Task {item.id}</h3>
        <p>Title: {item.title}</p>
        <p>Description: {item.task}</p>
        <p>User: {item.user}</p>
        <button onClick={() => deleteItem(item)}>
          <i className="fa fa-trash"></i>
        </button>
        <EditModal
          item={item}
          title={title}
          setTitle={setTitle}
          user={user}
          setUser={setUser}
          status={status}
          setStatus={setStatus}
          task={task}
          setTask={setTask}
        />
      </div>
    </Draggable>
  );
};

export default Item;
