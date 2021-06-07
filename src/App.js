import "./App.css";
import { Route, Switch } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import CreateTrip from "./components/Trip/CreateTrip";
import ViewTrip from "./components/Trip/ViewTrip";

import AppShell from "./components/AppShell/AppShell";

function App() {
  return (
    <div className="App">
      <AppShell>
        <div className="container-fluid App">
          {/* <switch><route> are from the react-router-dom library. They render components in {} when specified path (exact path) is entered */}
          <Switch>
            <Route exact path="/" component={CreateTrip} />
            <Route exact path="/trip" component={ViewTrip} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </AppShell>
    </div>
  );
}

export default App;
