import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import EmployeesService from "../services/EmployeesService";

const EmployeeDetails = () => {
  const { id } = useParams();
  const [currentEmployee, setCurrentEmployee] = useState("");
  const history = useHistory();

  useEffect(() => {
    EmployeesService.get(id)
      .then((employee) => {
        setCurrentEmployee(employee.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }, []);

  const handleDelete = () => {
    EmployeesService.remove(id)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="employee-details main-content">
      <article>
        <h5 className="text-capitalize primary-color">
          {currentEmployee.title}
        </h5>
        <div className="mb-3 font-italic metadata">
          <span>{currentEmployee.updatedAt}</span>
          <span className="text-capitalize">, {currentEmployee.category}</span>
        </div>
        <div className="mb-3">{currentEmployee.body}</div>
      </article>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EmployeeDetails;
