import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "./jury-thunk";
import {
  addJuryToLocalStorage,
  removeJuryFromLocalStorage,
  getJuryFromLocalStorage,
  addTokenJuryToLocalStorage,
  removeTokenJuryFromLocalStorage,
  getTokenJuryFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
};

const jurySlice = createSlice({
  name: "jury",
  initialState,
  reduserc: {},
  extraReducers: (builder) => {},
});

export const {} = jurySlice.actions;
export default jurySlice.reducer;
