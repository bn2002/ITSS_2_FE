import { configureStore } from '@reduxjs/toolkit';
import { HomeReducer } from './reducer/home';
import { UserInfoReducer } from './reducer/userinfo';
import { snackbarReducer } from './reducer/snackbar';

const store = configureStore({
    reducer: {
        homeState: HomeReducer,
        userInfoState: UserInfoReducer,
        snackbarState: snackbarReducer,
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
