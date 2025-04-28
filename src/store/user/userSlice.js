import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: undefined,
        firstName: undefined,
        lastName: undefined,
        authenticated: false,
        access_token: undefined,
        refresh_token: undefined
    },
    reducers: {
        register: {
            prepare(firstName,lastName,email,access_token) {
                return {
                    payload: {
                        firstName,
                        lastName,
                        email,
                        access_token
                    }
                }
            },
            reducer(state,action) {
                state.firstName = action.payload.firstName,
                state.lastName = action.payload.lastName,
                state.email = action.payload.email,
                state.authenticated = true,
                state.access_token = action.payload.access_token
            }
        }
    }
})

export default userSlice.reducer;
export const {register} = userSlice.actions;