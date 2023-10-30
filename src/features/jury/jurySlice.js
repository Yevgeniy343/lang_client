import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerJuryThunk,
  loginJuryThunk,
  remindJuryThunk,
  changeJuryPassThunk,
  getOrdersThunk,
  editProfileThunk,
  checkThunk,
  getEventsThunk,
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
  isSidebarOpen: false,
  currentSmallMenu: "",
  childOrders: [],
  adultOrders: [],
  events: [],
};

export const registerJury = createAsyncThunk(
  "jury/registerJury",
  async (jury, thunkAPI) => {
    return registerJuryThunk("/jury-auth/signup", jury, thunkAPI);
  }
);

export const loginJury = createAsyncThunk(
  "jury/loginJury",
  async (jury, thunkAPI) => {
    return loginJuryThunk(`/jury-auth/login/`, jury, thunkAPI);
  }
);

export const remindJury = createAsyncThunk(
  "jury/remindJury",
  async (jury, thunkAPI) => {
    return remindJuryThunk(`/jury-auth/remind/`, jury, thunkAPI);
  }
);

export const juryPassword = createAsyncThunk(
  "jury/pass",
  async (jury, thunkAPI) => {
    return changeJuryPassThunk(`/jury/changepass/`, jury, thunkAPI);
  }
);

export const getOrders = createAsyncThunk(
  "jury/getOrders",
  async (jury, thunkAPI) => {
    return getOrdersThunk(`/jury/getOrders/${jury.id}`, jury, thunkAPI);
  }
);

export const editProfile = createAsyncThunk(
  "jury/editProfile",
  async (info, thunkAPI) => {
    return editProfileThunk(`/jury/editProfile/`, info, thunkAPI);
  }
);

export const check = createAsyncThunk("jury/check", async (info, thunkAPI) => {
  return checkThunk(`/jury/check/`, info, thunkAPI);
});

export const getEvents = createAsyncThunk(
  "jury/getEvents",
  async (info, thunkAPI) => {
    console.log(info);
    return getEventsThunk(`/jury/getEvents/`, info, thunkAPI);
  }
);

const jurySlice = createSlice({
  name: "jury",
  initialState,
  reducers: {
    logOutJury: (state) => {
      state.jury = null;
      state.tokenJ = "";
      removeJuryFromLocalStorage();
      removeTokenJuryFromLocalStorage();
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

    // remind
    builder.addCase(remindJury.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(remindJury.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.msg);
    });
    builder.addCase(remindJury.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    builder.addCase(juryPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(juryPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(`Пароль успешно изменен`);
    });
    builder.addCase(juryPassword.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.childOrders = payload.childOrders;
      state.adultOrders = payload.adultOrders;
    });
    builder.addCase(getOrders.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    builder.addCase(editProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editProfile.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.jury = payload;
      addJuryToLocalStorage(payload);
    });
    builder.addCase(editProfile.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    builder.addCase(check.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(check.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.childOrders = payload.childOrders;
      state.adultOrders = payload.adultOrders;
      toast.success(`Проверено !`);
    });
    builder.addCase(check.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    builder.addCase(getEvents.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEvents.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.events = payload;
      // toast.success(`Проверено !`);
    });
    builder.addCase(getEvents.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const {
  logOutJury,
  sidebarCloseHandler,
  sidebarOpenHandler,
  smallMenuHandler,
} = jurySlice.actions;
export default jurySlice.reducer;
