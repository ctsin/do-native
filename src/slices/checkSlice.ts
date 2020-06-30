import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../interfaces/post.interface";
import { AppThunk } from "../../App";
import { API } from "../constants/api";

const initialState: Record<"post" | "postFromThunkCreator", Post> = {
  post: {} as Post,
  postFromThunkCreator: {} as Post,
};

export const fetchPostWithThunkCreator = createAsyncThunk<Post, number>(
  "post/fetchPostWithThunkCreator",
  async (postId: number) => {
    const post = await fetch(`${API}posts/${postId}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return post;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost(state, { payload }: PayloadAction<Post>) {
      state.post = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostWithThunkCreator.fulfilled, (state, { payload }) => {
      state.postFromThunkCreator = payload;
    });
  },
});

const { getPost } = postSlice.actions;

export default postSlice.reducer;

export const fetchPost = (postId: number): AppThunk => async (dispatch) => {
  try {
    const post: Post = await fetch(`${API}posts/${postId}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    dispatch(getPost(post));
  } catch (err) {
    console.log(err);
  }
};
