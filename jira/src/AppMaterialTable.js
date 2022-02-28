import Login from "./Login"
import Dashboard from "./Dashboard"
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./components/home"
import { useEffect, useState } from "react";
import MaterialTable from 'material-table'


/*const code = new URLSearchParams(window.location.search).get("code")

function App() {

    /*return code ? <Dashboard code={code} /> : <Login />

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/login/callback'} />
                <Route path="/home" element={< Home />} />
            </Routes>
        </BrowserRouter>
    );
} */

function App() {

const [data, setData] = useState([])
const columns = [
  { title: "Issue-ID", field: "id" },
  { title: "Description", field: "username" },
  { title: "Environment", field: "name" },
  { title: "Details", field: "email" },
]

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(resp => {
      setData(resp)
    })
}, [])

return (
  <div className="App">
    <h1 align="center">React-App</h1>
    <h4 align='center'>JIRA-ISSUE-TABLE</h4>
    <MaterialTable
      title="Employee Data"
      data={data}
      columns={columns}
    />
  </div>
);
}

export default App;