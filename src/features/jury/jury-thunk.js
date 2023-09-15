import customFetch from "../../utils/axios";
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
