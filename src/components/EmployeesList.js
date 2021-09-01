import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeesService from "../services/EmployeesService";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeesService.getAll()
      .then((response) => {
        console.log("printing resposne", response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []);

  return (
    <div className="main-content">
      <h4>List of Employees</h4>
      <div className="employees-list mt-4">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <div key={employee.id} className="employees-preview mt-3">
              <Link to={`/employees/${employee.id}`}>
                <h5 className="primary-color text-capitalize">
                  {employee.title}
                </h5>
                <p>{employee.body}</p>
              </Link>
            </div>
          ))
        ) : (
          <div>No employee available</div>
        )}
      </div>
    </div>
  );
};

export default EmployeesList;
