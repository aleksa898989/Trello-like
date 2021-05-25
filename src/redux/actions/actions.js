import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../types";

const add_task = (task) => ({
  type: ADD_ITEM,
  payload: task,
});

const delete_task = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});
const edit_task = (task) => ({
  type: UPDATE_ITEM,
  payload: task,
});
const actions = {
  add_task,
  delete_task,
  edit_task,
};

export default actions;
