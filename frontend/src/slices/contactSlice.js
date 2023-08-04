import { createSlice } from '@reduxjs/toolkit';

// Create a function to get the initial state from localStorage
const getInitialContacts = () => {
  const storedContacts = localStorage.getItem('contacts');
  return storedContacts ? JSON.parse(storedContacts) : [];
};

const initialState = {
  contacts: getInitialContacts(), // Initialize contacts using the function
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
      localStorage.setItem('contacts', JSON.stringify(action.payload));
    },
    // Add other reducers if needed
  },
});

export const { setContacts } = contactSlice.actions;
export default contactSlice.reducer;
