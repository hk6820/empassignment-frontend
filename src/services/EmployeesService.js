import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/employees");
};

const create = (data) => {
  return httpClient.post("/employees", data);
};

const get = (id) => {
  return httpClient.get(`/employees/${id}`);
};

export default { getAll, create, get };
