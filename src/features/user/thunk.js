import customFetch from "../../utils/axios";
import { logOutUser } from "./userSlise";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const remindUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getEventThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const changeUserPassThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const createChildOrderThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const createAdultOrderThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAllOrdersThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editChildrenOrderThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editAdultOrderThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getConditionThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getDiplomsThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutUser());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
