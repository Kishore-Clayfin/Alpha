import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStudent() {
  let navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    standard: "",
    section: "",
  });

  const { name, standard, section } = student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/addStudent", student);
    navigate("/viewStudents");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="standard" className="form-label">
              Standard
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your standard"
                name="standard"
                value={standard}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                section
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your section"
                name="section"
                value={section}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/viewStudents">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddStudent