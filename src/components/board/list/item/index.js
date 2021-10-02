import EditModal from "./editItem";
import { useState } from "react";

const Item = ({ item, deleteItem }) => {
  const [title, setTitle] = useState(item.title);
  const [user, setUser] = useState({ value: item.user, label: item.user });
  const [status, setStatus] = useState({
    value: item.status,
    label: item.status,
  });
  const [task, setTask] = useState(item.task);

  return (
    <div className="item-inner">
      {Object.keys(item).map((taskItem, index) => {
        return <h3 key={index}>{item[taskItem]}</h3>;
      })}
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
  );
};

export default Item;
