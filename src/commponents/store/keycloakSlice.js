import {createSlice} from "@reduxjs/toolkit";

const initState = {token: null, userInfo: null, isAdmin: false, isLoading: false, error: null};

/**
 * Keycloakの情報をセットするSlice
 */
export const keycloakSlice = createSlice({
    name: "token",
    initialState: initState,
    reducers: {
        //トークンと管理者ロールをセット
        save(state, action) {
            state.token = action.payload.token;
            state.isAdmin = action.payload.token.isAdmin;
        },
        //ユーザ情報をセット
        userInfo(state, action) {
            state.userInfo = action.payload.userInfo;
        }

    },

});

export default keycloakSlice;