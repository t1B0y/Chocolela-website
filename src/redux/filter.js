import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {
    chocolats: false,
    ballotins: false,
    tablettes: false,
    noel: false,
    paques: false,
    stValentin: false,
    patisseries: false,
    gateaux: false,
    viennoiserie: false,
    fetes: false,
    noel: false,
    paques: false,
    stValentin: false,
    cadeaux: false,
  },
};

export const projectSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const [group, key] = action.payload;
      state.categories[key] = !state.categories[key];
    },
  },
});

export const { toggleFilter } = projectSlice.actions;
export default projectSlice.reducer;
