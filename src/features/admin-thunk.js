import customFetch from "../utils/axios";

export const loginAdminThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const createEventThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getEventsThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editEventsThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteEventsThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.delete(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getUsersThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const createNomThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getNomThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteNomThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.delete(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getChildOrdersThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAdultOrdersThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editChildrenOrderThunk = async (url, info, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, info);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
