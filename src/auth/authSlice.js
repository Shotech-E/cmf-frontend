import { createSlice } from "@reduxjs/toolkit";

const loadMemberFromLocalStorage = () => {
  try {
    const sterilizedState = localStorage.getItem("member");
    if (sterilizedState == null) return { member: null };
    return { member: JSON.parse(sterilizedState) };
  } catch {
    return { member: null };
  }
};

const initialState = loadMemberFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMember: (state, action) => {
      state.member = action.payload.member;
      localStorage.setItem("member", JSON.stringify(state.member));
      },
    logout: (state) => {
      state.member = null;
      localStorage.removeItem("member");
    },
  },
});

export const { setMember, logout } = authSlice.actions;
export default authSlice.reducer;