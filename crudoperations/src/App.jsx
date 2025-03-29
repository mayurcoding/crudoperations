import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, user]);
    setUser({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div div className="container">
      <div className="form">
        <h1>Creation Of Records</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button>Save</button>
        </form>
      </div>

      <div className="table">
        <h1>Records</h1>
        <table>
          <thead>
            <tr>
              <td>S.no</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Password</td>
            </tr>
          </thead>
          <tbody>{users.map((item, index) => (
            <tr>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.password}</td>

            </tr>

          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
