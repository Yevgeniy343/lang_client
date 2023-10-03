import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerUserThunk,
  loginUserThunk,
  editUserThunk,
  getEventThunk,
  changeUserPassThunk,
  remindUserThunk,
  createChildOrderThunk,
  createAdultOrderThunk,
  getAllOrdersThunk,
  editChildrenOrderThunk,
  editAdultOrderThunk,
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
  noms: [],
  nomins: [],
  nomPul: "",
  childOrders: [],
  adultOrders: [],
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

export const remindUser = createAsyncThunk(
  "user/remindUser",
  async (user, thunkAPI) => {
    return remindUserThunk(`/auth/remind/`, user, thunkAPI);
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

export const changeUserPass = createAsyncThunk(
  "user/changepass",
  async (info, thunkAPI) => {
    return changeUserPassThunk(`/user/changepass/`, info, thunkAPI);
  }
);

export const createChildOrder = createAsyncThunk(
  "user/createchildorder",
  async (info, thunkAPI) => {
    return createChildOrderThunk(`/user/createChildOrder/`, info, thunkAPI);
  }
);

export const createAdultOrder = createAsyncThunk(
  "user/createadultorder",
  async (info, thunkAPI) => {
    return createAdultOrderThunk(`/user/createAdultOrder/`, info, thunkAPI);
  }
);

export const getAllOrders = createAsyncThunk(
  "user/getAllOrders",
  async (info, thunkAPI) => {
    return getAllOrdersThunk(`/user/getAllOrders/${info}`, info, thunkAPI);
  }
);

export const editChildrenOrder = createAsyncThunk(
  "user/editChildrenOrder",
  async (info, thunkAPI) => {
    return editChildrenOrderThunk(`/user/editChildrenOrder/`, info, thunkAPI);
  }
);

export const editAdultOrder = createAsyncThunk(
  "user/editAdultOrder",
  async (info, thunkAPI) => {
    return editAdultOrderThunk(`/user/editAdultOrder/`, info, thunkAPI);
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
    nominationHandler: (state, { payload }) => {
      state.nomPul = payload;
    },
  },
  extraReducers: (builder) => {
    // registers
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
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

    // remindUser
    builder.addCase(remindUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(remindUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.msg);
    });
    builder.addCase(remindUser.rejected, (state, { payload }) => {
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
      state.noms = payload.noms;
      state.nomins = payload.nominations;
    });
    builder.addCase(getEvent.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // changeUserPass
    builder.addCase(changeUserPass.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeUserPass.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(`Пароль успешно изменен`);
    });
    builder.addCase(changeUserPass.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // createChildOrder
    builder.addCase(createChildOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createChildOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(`Ваша заявка принята на рассмотрение модератору.`);
    });
    builder.addCase(createChildOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // createAdultOrder
    builder.addCase(createAdultOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createAdultOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(`Ваша заявка принята на рассмотрение модератору.`);
    });
    builder.addCase(createAdultOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getAllOrders
    builder.addCase(getAllOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.childOrders = payload.childOrders;
      state.adultOrders = payload.adultOrders;
    });
    builder.addCase(getAllOrders.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // editChildrenOrder
    builder.addCase(editChildrenOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editChildrenOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.childOrders = payload;
    });
    builder.addCase(editChildrenOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // editAdultOrder
    builder.addCase(editAdultOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editAdultOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.adultOrders = payload;
      console.log(payload);
    });
    builder.addCase(editAdultOrder.rejected, (state, { payload }) => {
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
  nominationHandler,
} = userSlice.actions;
export default userSlice.reducer;
