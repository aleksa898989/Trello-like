import ReactCircleModal from "react-circle-modal";
import Select from "react-select";
import { useDispatch } from "react-redux";
import actions from "redux/actions/actions";
import { statusOptions, users } from "data";

import styles from "./CreateEditModal.module.scss";

const CreateEditModal = ({
  status,
  setUser,
  setStatus,
  task,
  setTitle,
  title,
  user,
  item,
  isEditMode,
  list,
  setTask,
}) => {
  const addTask = (task) => dispatch(actions.addTask(task));

  const generateId = () => {
    if (list && list.length > 0) {
      return Math.max(...list.map((item) => item.id)) + 1;
    } else {
      return 1;
    }
  };

  let incrementedId = generateId();

  const createNewTask = () => {
    const newId = generateId();

    addTask({
      id: newId.toString(),
      task,
      title,
      user: user.value,
      status: status.value,
    });

    setTask("");
    setTitle("");
    setUser({ value: "Select user", label: "Select user" });
    setStatus({ value: "Select status", label: "Select status" });
  };

  const dispatch = useDispatch();
  const editTask = (task) => dispatch(actions.editTask(task));

  const isButtonDisabled =
    !task ||
    status === "Select Status" ||
    user === "Select user" ||
    title === "";

  return (
    <ReactCircleModal
      toogleComponent={(onClick) => (
        <button onClick={onClick}>
          <i className={isEditMode ? "fa fa-edit" : "fa fa-plus"}></i>
        </button>
      )}
    >
      {(close) => (
        <>
          <div className={styles.root}>
            <span onClick={close}>X</span>
            <h3>Task {incrementedId}</h3>
            <Select
              className={styles.select}
              value={user}
              defaultValue={isEditMode ? user : "Select user"}
              onChange={(e) => {
                setUser(e);
              }}
              options={users}
            />
            <Select
              value={status}
              className={styles.select}
              defaultValue={isEditMode ? status : "Select Status"}
              onChange={(e) => {
                setStatus(e);
              }}
              options={statusOptions}
            />

            <input
              value={task}
              placeholder={"task"}
              type="text"
              defaultValue={isEditMode ? task : ""}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />

            <input
              value={title}
              placeholder="title"
              type="text"
              defaultValue={isEditMode ? title : ""}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <button
              disabled={isButtonDisabled}
              onClick={() => {
                if (isEditMode) {
                  editTask({
                    id: item.id,
                    title,
                    task,
                    status: status.value,
                    user: user.value,
                  });
                  close();
                } else {
                  createNewTask();
                  close();
                }
              }}
            >
              <i className="fa fa-check"></i>
            </button>
          </div>
        </>
      )}
    </ReactCircleModal>
  );
};

export default CreateEditModal;
