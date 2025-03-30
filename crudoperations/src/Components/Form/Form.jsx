import { useContext } from "react"
import { UserContext } from "../../Context/UserContextProvider"

const Form = () => {
    const {user, handleChange,handleSubmit} = useContext(UserContext)

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
  )
}

export default Form
