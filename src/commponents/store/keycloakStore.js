import { createSlice } from "@reduxjs/toolkit";
const initState = { token: null, userInfo: null, isAdmin: false,isLoading: false, error: null };

export const keycloakSlice = createSlice({
    name: "token",
    initialState: initState,
    reducers: {
        save(state, action) {
            state.token = action.payload.token;
            state.isAdmin = action.payload.token.isAdmin;
        },
        userInfo(state, action){
            state.userInfo = action.payload.userInfo;
        }

    },

});




export default keycloakSlice;