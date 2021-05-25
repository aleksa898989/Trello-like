import Item from "./item";

const List = ({ list, deleteItem }) => {
  let todoList = list.filter((x) => x.status === "todo");
  let inProgressList = list.filter((x) => x.status === "in_progress");
  let doneList = list.filter((x) => x.status === "done");

  return (
    <div className="list-wrapper">
      <div className="item-wrapper">
        <h2>To do</h2>
        {todoList.map((item) => (
          <Item deleteItem={deleteItem} item={item} key={item.id} />
        ))}
      </div>
      <div className="item-wrapper">
        <h2>In progress</h2>
        {inProgressList.map((item) => (
          <Item deleteItem={deleteItem} item={item} key={item.id} />
        ))}
      </div>
      <div className="item-wrapper">
        <h2>Done</h2>
        {doneList.map((item) => (
          <Item deleteItem={deleteItem} item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
