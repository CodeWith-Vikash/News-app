
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchNews = createAsyncThunk('fetchNews', async (query) => {
        const url = ` https://gnews.io/api/v4/search?q=${query}&apikey=afcb5fc88551b26f6a82573d9bf4ceae`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        data:[],
        dataDetails:{},
        isloading:false,
        iserror:false
    },
    reducers: {
        setDetails:(state,action)=>{
            state.dataDetails=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNews.pending,(state,action)=>{
            state.isloading=true
        })

        builder.addCase(fetchNews.fulfilled,(state,action)=>{
            state.isloading=false
            state.data=action.payload
        })

        builder.addCase(fetchNews.rejected,(state,action)=>{
            state.iserror=true
            state.isloading=false
        })
    }
});

export const  {setDetails} = newsSlice.actions
export default newsSlice.reducer;
