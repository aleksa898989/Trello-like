import { useState } from "react";
import styles from "./ListItem.module.scss";
import CreateEditModal from "components/CreateEditModal/CreateEditModal";

const Item = ({ item, deleteItem }) => {
  const [title, setTitle] = useState(item.title);
  const [user, setUser] = useState({ value: item.user, label: item.user });
  const [status, setStatus] = useState({
    value: item.status,
    label: item.status,
  });

  const [task, setTask] = useState(item.task);

  const handleDeleteItem = () => {
    deleteItem(item);
  };

  return (
    <div className={styles.inner}>
      {Object.keys(item).map((taskItem, index) => {
        return <p key={index}>{item[taskItem]}</p>;
      })}

      <button onClick={handleDeleteItem}>
        <i className="fa fa-trash"></i>
      </button>

      <CreateEditModal
        isEditMode
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
