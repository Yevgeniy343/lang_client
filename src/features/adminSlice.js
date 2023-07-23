import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAdminThunk,
  createEventThunk,
  getEventsThunk,
  editEventsThunk,
  deleteEventsThunk,
  getUsersThunk,
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
  isEventModal: false,
  currentEvent: [],
  users: [],
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
    return getEventsThunk(`/admin/getevents/`, info, thunkAPI);
  }
);

export const editEvents = createAsyncThunk(
  "admin/editevent",
  async (info, thunkAPI) => {
    console.log("info", info);
    return editEventsThunk(`/admin/editevent/`, info, thunkAPI);
  }
);

export const deleteEvents = createAsyncThunk(
  "admin/deleteevent",
  async (info, thunkAPI) => {
    console.log("info", info);
    return deleteEventsThunk(`/admin/deleteevent/${info.id}`, info, thunkAPI);
  }
);

export const getUsers = createAsyncThunk(
  "admin/getUsers",
  async (info, thunkAPI) => {
    console.log("info", info);
    return getUsersThunk(`/admin/getallusers`, info, thunkAPI);
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
    eventModalHandler: (state, { payload }) => {
      state.isEventModal = payload;
    },
    currentEventHandler: (state, { payload }) => {
      state.currentEvent = payload;
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

    // editEvent
    builder.addCase(editEvents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editEvents.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.events = payload.events;
      toast.success(`Изменения сохранены!`);
    });
    builder.addCase(editEvents.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // deleteEvent
    builder.addCase(deleteEvents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteEvents.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.events = payload.events;
      toast.success(`Мероприятие удалено!`);
    });
    builder.addCase(deleteEvents.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getUsers
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.users = payload.users;

      // toast.success(`Мероприятие удалено!`);
    });
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const { logOutAdmin, eventModalHandler, currentEventHandler } =
  adminSlice.actions;
export default adminSlice.reducer;
