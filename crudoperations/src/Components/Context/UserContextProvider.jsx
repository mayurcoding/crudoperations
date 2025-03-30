import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
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
    if (user.id) {
      const updateUsers = users.map((item) =>
        item.id === user.id ? { ...user } : item
      );
      setUsers(updateUsers);
    } else {
      setUsers([...users, { ...user, id: crypto.randomUUID() }]);
    }

    setUser({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  const handleDelete = (id) => {
    const updateUsers = users.filter((item) => item.id !== id);
    setUsers(updateUsers);
  };

  const handleEdit = (item) => {
    setUser(item); // Fix here
  };
  return(
  <UserContext.Provider
    value={{
      user,
      users,
      handleChange,
      handleSubmit,
      handleDelete,
      handleEdit,
    }}
  >
    {children}
  </UserContext.Provider>
  );
};
export default UserContextProvider;
