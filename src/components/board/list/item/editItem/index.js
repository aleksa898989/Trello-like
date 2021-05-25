import ReactCircleModal from "react-circle-modal";
import Select from "react-select";
import { statusOptions, users } from "../../../data";
import { useDispatch } from "react-redux";
import actions from "../../../../../redux/actions/actions";

const EditModal = ({
  title,
  setTitle,
  user,
  setUser,
  status,
  setStatus,
  task,
  setTask,
  item,
}) => {
  const dispatch = useDispatch();
  const edit_task = (task) => dispatch(actions.edit_task(task));

  return (
    <ReactCircleModal
      backgroundColor="#0e101c;"
      toogleComponent={(onClick) => (
        <button style={{ marginLeft: "2rem" }} onClick={onClick}>
          <i className="fa fa-edit"></i>
        </button>
      )}
      offsetX={0}
      offsetY={0}
    >
      {(close) => (
        <>
          <div className="modal-wrapper">
            <span onClick={close}>X</span>
            <h3>Task {item.id}</h3>
            <Select
              value={status}
              onChange={(e) => {
                setStatus(e);
              }}
              options={statusOptions}
            />
            <Select
              value={user}
              onChange={(e) => {
                setUser(e);
              }}
              options={users}
            />
            <input
              placeholder={"task"}
              type="text"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
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
              onClick={() => {
                edit_task({
                  id: item.id,
                  title: title,
                  task: task,
                  status: status.value,
                  user: user.value,
                });
                close();
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

export default EditModal;
