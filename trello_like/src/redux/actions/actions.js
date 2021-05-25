import { ADD_ITEM, DELETE_ITEM } from "../types";

const add_task = (task) => ({
  type: ADD_ITEM,
  payload: task,
});

const delete_task = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

const actions = {
  add_task,
  delete_task,
};

export default actions;
