import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  logindata:{},

};

const cookies = createSlice({
  name: 'cookies',
  initialState,
  reducers: {
    setLoginData(state, action) {
      state.logindata = action.payload;
    },
  },
});

export const {setLoginData,} = cookies.actions;
export default cookies.reducer;
