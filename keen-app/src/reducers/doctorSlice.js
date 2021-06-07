import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { requestStatus, rootApiUrl } from "../consts";

export const fetchDoctors = createAsyncThunk(
  "categories/fetchDoctors",
  async ({searchQuery}) => {
    const response = await axios({
      method: "GET",
      url: `${rootApiUrl}/doctor?name=${searchQuery}`,
    });
    return response.data;
  }
);

export const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    list: null,
    status: requestStatus.idle,
    searchQuery: null,
  },
  reducers: {
    clearState: (state, action) => {
      state.list = null;
      state.status = requestStatus.idle;
    },
    changeSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: {
    [fetchDoctors.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = requestStatus.succeeded;
    },
    [fetchDoctors.pending]: (state, action) => {
      state.status = requestStatus.loading;
    },
    [fetchDoctors.rejected]: (state, action) => {
      state.status = requestStatus.failed;
      state.list = [];
    },
  },
});

export const { clearState, changeSearchQuery } = doctorSlice.actions;

export default doctorSlice.reducer;
