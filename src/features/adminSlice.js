import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAdminThunk,
  createEventThunk,
  getEventsThunk,
} from "./admin-thunk";
import toast from "react-hot-toast";
import {
  addAdminToLocalStorage,
  removeAdminFromLocalStorage,
  getAdminFromLocalStorage,
} from "../utils/localStorage";

const initialState = {
  isLoading: false,
  admin: getAdminFromLocalStorage(),
  events: [],
};

export const loginAdmin = createAsyncThunk(
  "user/loginAdmin",
  async (user, thunkAPI) => {
    return loginAdminThunk(`/admin/login/`, user, thunkAPI);
  }
);

export const createEvent = createAsyncThunk(
  "admin/createevent",
  async (info, thunkAPI) => {
    return createEventThunk(`/admin/createevent/`, info, thunkAPI);
  }
);

export const getEvents = createAsyncThunk(
  "admin/getevent",
  async (info, thunkAPI) => {
    console.log("info", info);
    return getEventsThunk(`/admin/getevents/`, info, thunkAPI);
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logOutAdmin: (state) => {
      state.admin = null;
      removeAdminFromLocalStorage();
      toast.success(`Пока !`);
    },
  },
  extraReducers: (builder) => {
    // loginAdmin
    builder.addCase(loginAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const admin = payload.admin;
      state.admin = admin;
      console.log(payload);
      addAdminToLocalStorage(admin);
      toast.success(`Привет Админ !`);
    });
    builder.addCase(loginAdmin.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // createEvent
    builder.addCase(createEvent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createEvent.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(`Мероприятие "${payload.name}" успешно создано !`);
    });
    builder.addCase(createEvent.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getEvent
    builder.addCase(getEvents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEvents.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.events = payload.events;
    });
    builder.addCase(getEvents.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const { logOutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
