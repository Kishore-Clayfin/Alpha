import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function StudentHome() {
  const [students, setStudents] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8081/viewStudents");
    setStudents(result.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8081/deleteStudent/${id}`);
    loadStudents();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Standard</th>
              <th scope="col">Section</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.name}</td>
                <td>{student.standard}</td>
                <td>{student.section}</td>
                 <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewStudent/${student.studentId}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/updateStudent/${student.studentId}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteStudent(student.studentId)}
                  >
                    Delete
                  </button>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default StudentHome