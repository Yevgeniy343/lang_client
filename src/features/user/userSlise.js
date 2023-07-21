import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerUserThunk,
  loginUserThunk,
  editUserThunk,
  getEventThunk,
} from "./thunk";
import toast from "react-hot-toast";
import {
  addTokenToLocalStorage,
  addUserToLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
  isSidebarOpen: false,
  currentSmallMenu: "",
  events: [],
  isOrderModal: false,
  currentOrder: [],
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/signup", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk(`/auth/login/`, user, thunkAPI);
  }
);

export const editUser = createAsyncThunk(
  "user/editUser",
  async (user, thunkAPI) => {
    return editUserThunk(`/user/edit_user/`, user, thunkAPI);
  }
);

export const getEvent = createAsyncThunk(
  "user/getEvent",
  async (info, thunkAPI) => {
    return getEventThunk(`/user/get_event/`, info, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.user = null;
      state.token = "";
      removeUserFromLocalStorage();
      removeTokenFromLocalStorage();
    },
    sidebarCloseHandler: (state) => {
      state.isSidebarOpen = false;
    },
    sidebarOpenHandler: (state) => {
      state.isSidebarOpen = true;
    },
    smallMenuHandler: (state, { payload }) => {
      state.currentSmallMenu = payload;
    },
    orderModalHandler: (state, { payload }) => {
      state.isOrderModal = payload;
    },
    currentOrderHandler: (state, { payload }) => {
      state.currentOrder = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });

    // registers
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      const { user, token } = payload;
      state.isLoading = false;
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      toast.success(`Привет ${user.name} !`);
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { user, token } = payload;
      state.isLoading = false;
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      toast.success(`Добро пожаловать  ${user.name} !`);
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // editUser
    builder.addCase(editUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      toast.success(`Изменения внесены`);
    });
    builder.addCase(editUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getEvent
    builder.addCase(getEvent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEvent.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.events = payload.event;
    });
    builder.addCase(getEvent.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const {
  logOutUser,
  sidebarCloseHandler,
  sidebarOpenHandler,
  smallMenuHandler,
  orderModalHandler,
  currentOrderHandler,
} = userSlice.actions;
export default userSlice.reducer;
