import { useState } from "react";
import { useSelector } from "react-redux";
import CreateEditModal from "components/CreateEditModal/CreateEditModal";
import List from "components/List/List";

import "./main.scss";

const App = () => {
  const list = useSelector((store) => store?.reducer?.list);

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

  return (
    <>
      <CreateEditModal
        isEditMode={false}
        status={status}
        user={user}
        setUser={setUser}
        setStatus={setStatus}
        task={task}
        setTitle={setTitle}
        title={title}
        setTask={setTask}
        list={list}
      />
      <List list={list} />
    </>
  );
};

export default App;
