import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "redux/types";

const initialState = {
  list: [
    {
      id: "",
      task: "",
      user: "",
      status: "",
      title: "",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      state = {
        list: [...state.list, action.payload],
      };
      return state;

    case UPDATE_ITEM:
      state = {
        list: [
          ...state.list.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };
      return state;

    case DELETE_ITEM:
      state = {
        list: state.list.filter((task) => task.id !== action.payload),
      };
      return state;
    default:
      return state;
  }
}
