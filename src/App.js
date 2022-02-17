import logo from "./logo.svg";
import "./App.css";
import { members } from "./components/DataBase";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Customer } from "./pages/customer/Customer";
import { Company } from "./pages/company/Company";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/customer/:idCustomer">
            <Customer members={members} />
          </Route>
          <Route path="/company/:companyId">
            <Company members={members} />
          </Route>
          <Route path="/">
            <Home members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
