const Item = ({ item, deleteItem }) => {
  return (
    <div className="item-inner">
      <h3>Task {item.id}</h3>
      <p>Title: {item.title}</p>
      <p>Description: {item.content}</p>
      <p>User: {item.user}</p>
      <button onClick={() => deleteItem(item)}>Remove Task</button>
    </div>
  );
};

export default Item;
