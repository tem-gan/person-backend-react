import { useHistory } from "react-router";

import EditForm from "../components/people/EditForm";

function EditData() {
  const history = useHistory();

  function editDataHandler(editData) {
    fetch("/person", {
      method: "PUT",
      body: JSON.stringify(editData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Edit people</h1>
      <EditForm onEditPeople={editDataHandler} />
    </section>
  );
}

export default EditData;
