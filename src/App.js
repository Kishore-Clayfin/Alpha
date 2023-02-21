import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentHome from "./pages/StudentHome";
import ViewStudent from "./students/ViewStudent";
import AddStudent from "./students/AddStudent";
import EditStudent from "./students/EditStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<StudentHome />} />
          <Route exact path="/viewStudents" element={<StudentHome />} />
          <Route exact path="/viewStudent/:id" element={<ViewStudent />} />
          <Route exact path="/addStudent" element={<AddStudent />} />
          <Route exact path="/updateStudent/:id" element={<EditStudent />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;