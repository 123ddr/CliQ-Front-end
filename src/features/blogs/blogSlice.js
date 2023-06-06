import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { toast} from "react-toastify";
import { addToWishlist } from "../products/productSlice";




export const getAllBlogs = createAsyncThunk("blogs/get",async(thunkAPI) => {
   "product/get",
    async (thunkAPI) => {
    try{
        return await blogService.getBlogs();
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
}
});



const blogtState = {
    product: " ",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}
export const pblogtState = createSlice({
     name:"product",
     initialState:blogtState,
     reducers:{},
     extraReducers:(builder)=>{
        builder
        .addCase(getAllBlogs.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAllBlogs.fulfilled, (state, action) => {
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.blog=action.payload;
        }).addCase(getAllBlogs.rejected, (state, action) => {
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(addToWishlist.pending,(state)=>{
        state.isLoading = true;
    });
        
     },
});

export default blogSlice.reducer;
 