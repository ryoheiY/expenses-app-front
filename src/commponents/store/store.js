import { configureStore } from "@reduxjs/toolkit";
import {keycloakSlice} from "./keycloakStore";
const store = configureStore({
  reducer: {
    keycloak: keycloakSlice.reducer
  },
});

export const keycloakActions = keycloakSlice.actions;
export default store;