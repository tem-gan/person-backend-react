import classes from "./PeopleList.module.css";
import PeopleItem from "./PeopleItem";

function PeopleList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((people) => (
        <PeopleItem
          key={people.id}
          id={people.id}
          firstname={people.firstname}
          lastname={people.lastname}
        />
      ))}
    </ul>
  );
}

export default PeopleList;
