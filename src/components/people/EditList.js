import classes from "./PeopleList.module.css";
import EditItem from "./EditItem";

function EditList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((people) => (
        <EditItem
          key={people.id}
          id={people.id}
          firstname={people.firstname}
          lastname={people.lastname}
        />
      ))}
    </ul>
  );
}

export default EditList;
