import { configureStore } from "@reduxjs/toolkit";
import BookmarkReducer from "./features/slice/addBookmarks"

export default configureStore({
    reducer :{
        Bookmarks : BookmarkReducer
    }
})