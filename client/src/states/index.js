import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  admin: false,
  trainer: false,
  posts: [],
  users:[],
  
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      
      state.user = action.payload.user;
      state.token = action.payload.token;
      if(state.user.email==="admin@gmail.com"){
        state.admin = true
    }
    console.log("state admin is" + state.admin)
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.trainer = false;
      state.admin = false;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("User friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setUsers, setAdmin, setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;