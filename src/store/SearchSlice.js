
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '761e6d9e52064190b9397b9700c29956';
const fromDate = '2024-06-01'; // Constant fromDate

export const fetchQuery = createAsyncThunk('fetchQuery', async (query) => {
        const url = `https://gnews.io/api/v4/search?q=${query}&apikey=afcb5fc88551b26f6a82573d9bf4ceae`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
);

const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        data:[],
        isloading:false,
        iserror:false
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchQuery.pending,(state,action)=>{
            state.isloading=true
        })

        builder.addCase(fetchQuery.fulfilled,(state,action)=>{
            state.isloading=false
            state.data=action.payload
        })

        builder.addCase(fetchQuery.rejected,(state,action)=>{
            state.iserror=true
            state.isloading=false
        })
    }
});

export default SearchSlice.reducer;
