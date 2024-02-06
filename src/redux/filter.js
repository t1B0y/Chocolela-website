import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {
    chocolats: {
      chocolats: false,
      ballotins: false,
      tablettes: false,
      noel: false,
      paques: false,
      stValentin: false,
    },
    patisseries: {
      patisseries: false,
      gateaux: false,
      viennoiserie: false,
    },
    fetes: {
      fetes: false,
      noel: false,
      paques: false,
      stValentin: false,
      cadeaux: false,
    },
  },
};

export const projectSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const [group, key] = action.payload;
      state.categories[group][key] = !state.categories[group][key];
    },
  },
});

export const { toggleFilter, selectCategories, resetSelected } =
  projectSlice.actions;
export default projectSlice.reducer;
