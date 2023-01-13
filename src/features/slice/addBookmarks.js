import { createSlice } from "@reduxjs/toolkit";



const BookmarkSlice = createSlice({
    name : "bookmarks",
    initialState: {
        value : 0,
        quote : [],
        authors : []
    },
    reducers : {
        addBM : (state,action)=>{
            state.quote.unshift(action.payload);
            // state.quote.map((e)=> console.log(e))
        },
        addAuthors : (state,action)=>{
            state.authors.unshift(action.payload);
        }
    }
})

export const{addBM, addAuthors} = BookmarkSlice.actions;

export default BookmarkSlice.reducer;