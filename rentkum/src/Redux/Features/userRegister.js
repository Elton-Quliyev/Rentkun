import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    const res = await fetch("kkkkkkkkkk", {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    });
    return await res.json();
});

export const logInUser = createAsyncThunk('loginuser', async (body) => {
    const res = await fetch("kkkkkkkkkk", {
        method: "post",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(body)
    });
    return await res.json();
});

const userRegister = createSlice({
    name: 'user',
    initialState: {
        msg: '',
        user: '',
        token: '',
        loading: false,
        error: ''
    },
    reducers: {
        addToken: (state, action) => {
            state.msg = localStorage.getItem("msg");
        },
        addUser: (state, action) => {
            state.token = localStorage.getItem("token");
        },
        logout: (state, action) => {
            state.token = '';
            state.user = '';
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        // SignUpUser reducers
        builder.addCase(signUpUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            if (payload.error) {
                state.error = payload.error;
            } else {
                state.msg = payload.msg;
            }
        });
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Sign up request failed';
        });

        // LogInUser reducers
        builder.addCase(logInUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(logInUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            if (payload.error) {
                state.error = payload.error;
            } else {
                state.msg = payload.msg;
                state.token = payload.token;
                state.user = payload.user;
                localStorage.setItem('msg', payload.msg);
                localStorage.setItem('token', payload.token);
                localStorage.setItem('user', JSON.stringify(payload.user));
            }
        });
        builder.addCase(logInUser.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Login request failed';
        });
    }
});

export const { addToken, addUser, logout } = userRegister.actions;
export default userRegister.reducer;
