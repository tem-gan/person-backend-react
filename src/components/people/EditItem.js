import classes from "./PeopleItem.module.css";
import { useHistory } from "react-router";
import Card from "../ui/Card";
import { Link } from "react-router-dom";

function EditItem(props) {
  const history = useHistory();
  function editPeopleHandler(id) {
    fetch(`http://localhost:8080/person/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  /* function editDataHandler(peopleData) {
    fetch("http://localhost:8080/person", {
      method: "PUT",
      body: JSON.stringify(peopleData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }*/
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.firstname}</h3>
          <p>{props.lastname}</p>
          <p>{props.id}</p>
        </div>
        <div className={classes.actions}>
          <Link to={"/edit-data/" + props.id}>
            <button type="button">Edit</button>
          </Link>
          <button onClick={() => editPeopleHandler(props.id)}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default EditItem;
