import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAdminThunk,
  createEventThunk,
  getEventsThunk,
  editEventsThunk,
  deleteEventsThunk,
  getUsersThunk,
  createNomThunk,
  getNomThunk,
  deleteNomThunk,
  getChildOrdersThunk,
  getAdultOrdersThunk,
  editChildrenOrderThunk,
  editAdultOrderThunk,
  editStatusOrderThunk,
  getReasonsThunk,
  deleteOrderThunk,
  uploadDiplomThunk,
} from "./admin-thunk";
import toast from "react-hot-toast";
import {
  addAdminToLocalStorage,
  removeAdminFromLocalStorage,
  getAdminFromLocalStorage,
} from "../utils/localStorage";
import _ from "lodash";

const initialState = {
  isLoading: false,
  admin: getAdminFromLocalStorage(),
  events: [],
  isEventModal: false,
  currentEvent: [],
  users: [],
  nominations: [],
  childNominations: [],
  adultNominations: [],
  nomE: [],
  childOrders: [],
  adultOrders: [],
  isChildOrder: false,
  isAdultOrder: false,
  currentChildOrder: "",
  currentAdultOrder: "",
  reasons: [],
  currentOrderType: "child",
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
    return editEventsThunk(`/admin/editevent/`, info, thunkAPI);
  }
);

export const deleteEvents = createAsyncThunk(
  "admin/deleteevent",
  async (info, thunkAPI) => {
    return deleteEventsThunk(`/admin/deleteevent/${info.id}`, info, thunkAPI);
  }
);

export const getUsers = createAsyncThunk(
  "admin/getUsers",
  async (info, thunkAPI) => {
    return getUsersThunk(`/admin/getallusers`, info, thunkAPI);
  }
);

export const createNom = createAsyncThunk(
  "admin/createNom",
  async (info, thunkAPI) => {
    return createNomThunk(`/admin/createnom`, info, thunkAPI);
  }
);

export const getNom = createAsyncThunk(
  "admin/getNom",
  async (info, thunkAPI) => {
    return getNomThunk(`/admin/getnom`, info, thunkAPI);
  }
);

export const deleteNom = createAsyncThunk(
  "admin/deleteNom",
  async (info, thunkAPI) => {
    return deleteNomThunk(`/admin/deletenom/${info.id}`, info, thunkAPI);
  }
);

export const getChildOrders = createAsyncThunk(
  "admin/getChildOrders",
  async (info, thunkAPI) => {
    return getChildOrdersThunk(`/admin/getChildOrders/`, info, thunkAPI);
  }
);

export const getAdultOrders = createAsyncThunk(
  "admin/getAdultOrders",
  async (info, thunkAPI) => {
    return getAdultOrdersThunk(`/admin/getAdultOrders/`, info, thunkAPI);
  }
);

export const editChildrenOrder = createAsyncThunk(
  "admin/editChildrenOrder",
  async (info, thunkAPI) => {
    return editChildrenOrderThunk(`/admin/editChildrenOrder/`, info, thunkAPI);
  }
);

export const editAdultOrder = createAsyncThunk(
  "admin/editAdultrenOrder",
  async (info, thunkAPI) => {
    return editAdultOrderThunk(`/admin/editAdultOrder/`, info, thunkAPI);
  }
);

export const editStausOrder = createAsyncThunk(
  "admin/editStatusOrder",
  async (info, thunkAPI) => {
    return editStatusOrderThunk(`/admin/editStatusOrder/`, info, thunkAPI);
  }
);

export const getReasons = createAsyncThunk(
  "admin/getReasons",
  async (info, thunkAPI) => {
    return getReasonsThunk(`/admin/getReasons/`, info, thunkAPI);
  }
);

export const deleteOrder = createAsyncThunk(
  "admin/deleteOrder",
  async (info, thunkAPI) => {
    return deleteOrderThunk(`/admin/delete_order/${info.id}`, info, thunkAPI);
  }
);

export const uploadDiplom = createAsyncThunk(
  "admin/uploadDiplom",
  async (info, thunkAPI) => {
    console.log(info);
    return uploadDiplomThunk(`/admin/upload_diplom`, info, thunkAPI);
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
    currentAdultOrderHandler: (state, { payload }) => {
      state.currentAdultOrder = payload;
    },
    currentChildOrderHandler: (state, { payload }) => {
      state.currentChildOrder = payload;
    },
    isAdultOrderHandler: (state, { payload }) => {
      state.isAdultOrder = payload;
    },
    isChildOrderHandler: (state, { payload }) => {
      state.isChildOrder = payload;
    },
    eventModalHandler: (state, { payload }) => {
      state.isEventModal = payload;
    },
    currentEventHandler: (state, { payload }) => {
      state.currentEvent = payload;
    },
    childNominationHandler: (state, { payload }) => {
      state.childNominations = payload;
    },
    adultNominationHandler: (state, { payload }) => {
      state.adultNominations = payload;
    },
    childNominationHandlerClean: (state) => {
      state.childNominations = [];
    },
    adultNominationHandlerClean: (state) => {
      state.adultNominations = [];
    },
    currentOrderTypeHandler: (state, { payload }) => {
      state.currentOrderType = payload;
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
      state.nomE = payload.noms;
      console.log(payload);
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

    // createNom
    builder.addCase(createNom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createNom.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.nominations.push(payload);

      toast.success(`Номинация создана !`);
    });
    builder.addCase(createNom.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // geteNom
    builder.addCase(getNom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNom.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.nominations = payload;

      // toast.success(`Мероприятие удалено!`);
    });
    builder.addCase(getNom.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
    // geteNom
    builder.addCase(deleteNom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteNom.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.nominations = payload;

      // toast.success(`Мероприятие удалено!`);
    });
    builder.addCase(deleteNom.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getChildOrders
    builder.addCase(getChildOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getChildOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.childOrders = payload;
    });
    builder.addCase(getChildOrders.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getAdultOrders
    builder.addCase(getAdultOrders.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAdultOrders.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.adultOrders = payload;
    });
    builder.addCase(getAdultOrders.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // editChildrenOrder
    builder.addCase(editChildrenOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editChildrenOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success("Изменения сохранены !");
      state.childOrders = payload.ordersChild;
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
      toast.success("Изменения сохранены !");
      state.adultOrders = payload.ordersAdult;
    });
    builder.addCase(editAdultOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // editStatusOrder
    builder.addCase(editStausOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editStausOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success("Статус заявки изменен !");
      state.adultOrders = payload.ordersAdult;
      state.childOrders = payload.ordersChild;
    });
    builder.addCase(editStausOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // getReasons
    builder.addCase(getReasons.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReasons.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.reasons = payload;
    });
    builder.addCase(getReasons.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // deleteOrder
    builder.addCase(deleteOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.adultOrders = payload.ordersAdult;
      state.childOrders = payload.ordersChild;
      toast.success("Заявка удалена !");
    });
    builder.addCase(deleteOrder.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // deleteOrder
    builder.addCase(uploadDiplom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadDiplom.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success("Диплом загружен !");
    });
    builder.addCase(uploadDiplom.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const {
  logOutAdmin,
  eventModalHandler,
  currentEventHandler,
  childNominationHandler,
  adultNominationHandler,
  childNominationHandlerClean,
  adultNominationHandlerClean,
  isAdultOrderHandler,
  isChildOrderHandler,
  currentChildOrderHandler,
  currentAdultOrderHandler,
  currentOrderTypeHandler,
} = adminSlice.actions;
export default adminSlice.reducer;
