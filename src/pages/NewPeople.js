import { useHistory } from "react-router";

import PeopleForm from "../components/people/PeopleForm";

function NewPeople() {
  const history = useHistory();

  function addPeopleHandler(peopleData) {
    fetch("http://localhost:8080/person", {
      method: "POST",
      body: JSON.stringify(peopleData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add new people</h1>
      <PeopleForm onAddPeople={addPeopleHandler} />
    </section>
  );
}

export default NewPeople;
