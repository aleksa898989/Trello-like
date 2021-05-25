import ReactCircleModal from "react-circle-modal";
import Select from "react-select";

const Modal = ({
  status,
  users,
  setUser,
  setStatus,
  statusOptions,
  task,
  handleInput,
  setTitle,
  title,
  createNewTask,
  incrementedId,
  setTask,
  user,
}) => {
  return (
    <ReactCircleModal
      backgroundColor="#0e101c;"
      toogleComponent={(onClick) => (
        <button onClick={onClick}>Create Issue</button>
      )}
      offsetX={10}
      offsetY={10}
    >
      {(close) => (
        <>
          <div className="modal-wrapper">
            <span onClick={close}>X</span>
            <h3>Task {incrementedId}</h3>
            <Select
              value={user}
              onChange={(e) => {
                setUser(e);
              }}
              options={users}
            />
            <Select
              value={status}
              onChange={(e) => {
                setStatus(e);
              }}
              options={statusOptions}
            />
            <input
              placeholder={"task"}
              type="text"
              value={task}
              onChange={handleInput}
            />
            <input
              placeholder={"title"}
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <button
              disabled={
                !task ||
                status === "Select Status" ||
                user === "Select user" ||
                title === ""
              }
              onClick={() => {
                createNewTask();
                close();
              }}
            >
              Save
            </button>
          </div>
        </>
      )}
    </ReactCircleModal>
  );
};

export default Modal;
