import { useState, useEffect } from "react";

import PeopleList from "../components/people/PeopleList";
/*
const DUMMY_DATA = [
  {
    id: "19",
    firstname: "React",
    lastname: "React-last",
  },
  {
    id: "20",
    firstname: "Riri",
    lastname: "Bouca",
  },
];
*/
function AllPeople() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPeople, setLoadedPeople] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("/person/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const people = [];

        for (const key in data) {
          const person = {
            id: key,
            ...data[key],
          };
          people.push(person);
        }
        setIsLoading(false);
        setLoadedPeople(people);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All People</h1>
      <PeopleList items={loadedPeople} />
    </section>
  );
}

export default AllPeople;
