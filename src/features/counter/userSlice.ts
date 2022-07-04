import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

import { UserState } from "../../types/user";

export const userSlice = createSlice({
  name: "user",
  initialState: {} as UserState,
  reducers: {
    login: (state: UserState | null, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    logout: (state: UserState | null, action: PayloadAction<null>) => {
      return {} as UserState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: UserState) => state.user;
export default userSlice.reducer;
