import Draggable from "react-draggable"; // The default
const Item = ({ item, deleteItem }) => {
  return (
    <Draggable>
      <div className="item-inner">
        <h3>Task {item.id}</h3>
        <p>Title: {item.title}</p>
        <p>Description: {item.content}</p>
        <p>User: {item.user}</p>
        <button onClick={() => deleteItem(item)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </Draggable>
  );
};

export default Item;
