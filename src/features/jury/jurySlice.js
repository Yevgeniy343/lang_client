import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerJuryThunk,
  loginJuryThunk,
  remindJuryThunk,
} from "./jury-thunk";
import {
  addJuryToLocalStorage,
  removeJuryFromLocalStorage,
  getJuryFromLocalStorage,
  addTokenJuryToLocalStorage,
  removeTokenJuryFromLocalStorage,
  getTokenJuryFromLocalStorage,
} from "../../utils/localStorage";
import toast from "react-hot-toast";

const initialState = {
  isLoading: false,
  jury: getJuryFromLocalStorage(),
  tokenJ: getTokenJuryFromLocalStorage(),
};

export const registerJury = createAsyncThunk(
  "user/registerJury",
  async (jury, thunkAPI) => {
    return registerJuryThunk("/jury-auth/signup", jury, thunkAPI);
  }
);

export const loginJury = createAsyncThunk(
  "user/loginJury",
  async (jury, thunkAPI) => {
    return loginJuryThunk(`/jury-auth/login/`, jury, thunkAPI);
  }
);

const jurySlice = createSlice({
  name: "jury",
  initialState,
  reduserc: {
    logOutJury: (state) => {
      state.jury = null;
      state.tokenJ = "";
      removeJuryFromLocalStorage();
      removeTokenJuryFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    // registers
    builder.addCase(registerJury.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerJury.fulfilled, (state, { payload }) => {
      const { jury, tokenJ } = payload;
      state.isLoading = false;
      state.jury = jury;
      state.tokenJ = tokenJ;
      addJuryToLocalStorage(jury);
      addTokenJuryToLocalStorage(tokenJ);
      toast.success(`Привет ${jury.name} !`);
    });
    builder.addCase(registerJury.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // login
    builder.addCase(loginJury.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginJury.fulfilled, (state, { payload }) => {
      const { jury, tokenJ } = payload;
      state.isLoading = false;
      state.jury = jury;
      state.tokenJ = tokenJ;
      addJuryToLocalStorage(jury);
      addTokenJuryToLocalStorage(tokenJ);
      toast.success(`Добро пожаловать  ${jury.name} !`);
    });
    builder.addCase(loginJury.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const { logOutJury } = jurySlice.actions;
export default jurySlice.reducer;
