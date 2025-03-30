import { useContext } from "react";

//Context
import { UserContext } from "../../Context/UserContextProvider";

//Redux
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  //const {user, handleChange,handleSubmit} = useContext(UserContext)

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
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
        <button>{user.id ? "Update" : "Save"}</button>
      </form>
    </div>
  );
};

export default Form;
