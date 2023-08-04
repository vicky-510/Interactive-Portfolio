import { createSlice } from '@reduxjs/toolkit';

// Create a function to get the initial state from localStorage
const getInitialAdminInfo = () => {
  const storedInfo = localStorage.getItem('adminInfo');
  return storedInfo ? JSON.parse(storedInfo) : null;
};

const initialState = {
  adminInfo: getInitialAdminInfo(), // Initialize adminInfo using the function
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.adminInfo = action.payload;
      localStorage.setItem('adminInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.adminInfo = null;
      localStorage.removeItem('adminInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
