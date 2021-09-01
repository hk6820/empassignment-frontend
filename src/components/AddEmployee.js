import { useState } from "react";
import { useHistory } from "react-router";
import EmployeesService from "../services/EmployeesService";

const AddEmployee = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("programming");
  const history = useHistory();

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = { title, body, category };
    EmployeesService.create(employee)
      .then((response) => {
        console.log("Employee added successfully", response.data);
        history.push("/");
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  return (
    <div className="create">
      <form>
        <div className="form-group">
          <label htmlFor="title">
            Employee Name: <sup>*</sup>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">
            Employee Description: <sup>*</sup>
          </label>
          <textarea
            id="body"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Employee Department:</label>
          <select
            id="category"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="programming">Programming</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <div className="text-center">
          <button onClick={(e) => saveEmployee(e)}>Add employee</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
