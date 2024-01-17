import {configureStore} from "@reduxjs/toolkit";
import {keycloakSlice} from "./keycloakSlice";

/**
 * Keycloakの情報のStore
 */
const store = configureStore({
    reducer: {
        keycloak: keycloakSlice.reducer
    },
});

export const keycloakActions = keycloakSlice.actions;
export default store;