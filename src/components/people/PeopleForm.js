import { useRef } from "react";
import classes from "./PeopleForm.module.css";
import Card from "../ui/Card";

function PeopleForm(props) {
  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstname = firstnameInputRef.current.value;
    const enteredLastname = lastnameInputRef.current.value;

    const peopleData = {
      firstname: enteredFirstname,
      lastname: enteredLastname,
    };
    props.onAddPeople(peopleData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="firstname">fistname</label>
          <input type="text" required id="firstname" ref={firstnameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="lastname">lastname</label>
          <input type="text" required id="lastname" ref={lastnameInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default PeopleForm;
