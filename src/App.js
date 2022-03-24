import { Route, Switch } from "react-router-dom";

import AllPeople from "./pages/AllPeople";
import EditPeople from "./pages/EditPeople";
import NewPeople from "./pages/NewPeople";
import Layout from "./components/layout/Layout";
import EditData from "./pages/EditData";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllPeople />
        </Route>
        <Route path="/new-people">
          <NewPeople />
        </Route>
        <Route path="/edit" exact>
          <EditPeople />
        </Route>
        <Route path="/edit-data/:id">
          <EditData />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
