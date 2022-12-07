import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "redux/types";

const addTask = (task) => ({
  type: ADD_ITEM,
  payload: task,
});

const deleteTask = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

const editTask = (task) => ({
  type: UPDATE_ITEM,
  payload: task,
});

const actions = {
  addTask,
  deleteTask,
  editTask,
};

export default actions;
