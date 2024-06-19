import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const apiKey = '761e6d9e52064190b9397b9700c29956';
const fromDate = '2024-06-01'; // Constant fromDate
export const fetchDetails=createAsyncThunk('fetchDetails',async(query)=>{
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=popularity&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data;
})

export const DetailSlice= createSlice({
    name:'detais',
    initialState:{
        isloading:false,
        iserror:false,
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchDetails.pending,(state,action)=>{
            state.isloading=true
        })

        builder.addCase(fetchDetails.fulfilled,(state,action)=>{
            state.isloading=false
            state.data=action.payload
        })

        builder.addCase(fetchDetails.rejected,(state,action)=>{
            state.iserror=true
            state.isloading=false
        })
    }
})

export default DetailSlice.reducer