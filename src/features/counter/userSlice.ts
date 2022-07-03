import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

import { UserState } from "../../types/user";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: {} as UserState },
  reducers: {
    login: (
      state: { user: UserState | null },
      action: PayloadAction<UserState>
    ) => {
      state.user = action.payload;
    },
    logout: (
      state: { user: UserState | null },
      action: PayloadAction<null>
    ) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: UserState) => state.user;
export default userSlice.reducer;
