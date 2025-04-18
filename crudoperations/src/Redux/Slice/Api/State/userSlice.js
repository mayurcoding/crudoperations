import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
    password: "",
  },
  users: [
    
  ]
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state,action){
      state.user = {...state.user,...action.payload}

    },
    setUsers(state,action){

    }
  },
});

export const {setUser,setUsers} = userSlice.actions;
export default userSlice.reducer;
