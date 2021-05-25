import { useState } from "react";
import Modal from "../modal";
import List from "./list";
import { statusOptions, users } from "./data";

const Board = ({ list, add_task, delete_task }) => {
  const [task, setTask] = useState("");
  const [title, setTitle] = useState("");
  const [user, setUser] = useState({
    value: "Select user",
    label: "Select user",
  });
  const [status, setStatus] = useState({
    value: "Select status",
    label: "Select status",
  });

  const generateId = () => {
    if (list && list.length > 0) {
      return Math.max(...list.map((item) => item.id)) + 1;
    } else {
      return 1;
    }
  };

  const createNewTask = () => {
    const newId = generateId();
    add_task({
      id: newId.toString(),
      task: task,
      title: title,
      user: user.value,
      status: status.value,
    });
    setTask("");
    setTitle("");
    setUser({ value: "Select user", label: "Select user" });
    setStatus({ value: "Select status", label: "Select status" });
  };

  const handleInput = (e) => {
    setTask(e.target.value);
  };
  const deleteItem = (task) => {
    delete_task(task.id);
  };

  let incrementedId = generateId();
  return (
    <div>
      <Modal
        status={status}
        user={user}
        incrementedId={incrementedId}
        users={users}
        setUser={setUser}
        setStatus={setStatus}
        statusOptions={statusOptions}
        task={task}
        handleInput={handleInput}
        setTitle={setTitle}
        title={title}
        createNewTask={createNewTask}
        setTask={setTask}
      />
      <List list={list} deleteItem={deleteItem} />
    </div>
  );
};

export default Board;
