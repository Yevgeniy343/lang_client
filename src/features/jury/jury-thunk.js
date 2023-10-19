import customFetch from "../../utils/juryAxios";
import { logOutJury } from "./jurySlice";

export const registerJuryThunk = async (url, jury, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, jury);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginJuryThunk = async (url, jury, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, jury);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const remindJuryThunk = async (url, jury, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, jury);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

// export const changeJuryPassThunk = async (url, jury, thunkAPI) => {
//   try {
//     const resp = await customFetch.post(url, jury);
//     return resp.data;
//   } catch (error) {
//     console.log(error.response.data.msg);
//     return thunkAPI.rejectWithValue(error.response.data.msg);
//   }
// };

export const changeJuryPassThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutJury());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getOrdersThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutJury());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editProfileThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logOutJury());
      return thunkAPI.rejectWithValue("Пользователь не авторизован");
    }
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
