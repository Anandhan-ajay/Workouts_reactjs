import React, { useState } from "react";
// import Workout from "./Workout";
import WorkoutOne from "./WorkoutOne";
// import Workout from "./Workout";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
    // Add more initial users here...
  ]);

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    if (formData.name.trim() === "" || formData.email.trim() === "") {
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setFormData({ name: "", email: "" });
  };

  const handleEditUser = (userId) => {
    const updatedName = prompt("Enter new name:", users.find(user => user.id === userId).name);
    const updatedEmail = prompt("Enter new email:", users.find(user => user.id === userId).email);

    if (!updatedName || !updatedEmail) {
      return;
    }

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, name: updatedName, email: updatedEmail } : user
      )
    );
  };

  const handleDeleteUser = (userId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this user?");
    if (shouldDelete) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name} ({user.email})</span>
            <button onClick={() => handleEditUser(user.id)}>Edit</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* <Workout/> */}
      <WorkoutOne/>
    </div>
  );
}

export default App;
