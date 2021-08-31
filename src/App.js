import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeesList from "./components/EmployeesList";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={EmployeesList} />
            <Route path="/add" component={AddEmployee} />
            <Route path="/employees/:id" component={EmployeeDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
