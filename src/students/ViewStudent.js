import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewStudent() {
  const [student, setStudent] = useState({
    name: "",
    standard: "",
    section: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8081/viewStudent/${id}`);
    setStudent(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Student Details</h2>

          <div className="card"> 
            <div className="card-header">
              Details of Student id : {student.studentId}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {student.name}
                </li>
                <li className="list-group-item">
                  <b>Standard:</b>
                  {student.standard}
                </li>
                <li className="list-group-item">
                  <b>Section:</b>
                  {student.section}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/viewStudents "}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewStudent