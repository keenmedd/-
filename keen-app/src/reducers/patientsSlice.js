import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { requestStatus, rootApiUrl } from "../consts";

export const fetchPatients = createAsyncThunk(
    "categories/fetchPatients",
    async({ searchQuery }) => {
        debugger;
        const response = await axios({
            method: "GET",
            url: `${rootApiUrl}/doctor?name=${searchQuery}`,
        });
        debugger;
        return response.data;
    }
);

export const patientSlice = createSlice({
    name: "patient",
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
        [fetchPatients.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.status = requestStatus.succeeded;
        },
        [fetchPatients.pending]: (state, action) => {
            state.status = requestStatus.loading;
        },
        [fetchPatients.rejected]: (state, action) => {
            state.status = requestStatus.failed;
            state.list = [];
        },
    },
});

export const { clearState, changeSearchQuery } = patientSlice.actions;

export default patientSlice.reducer;