import { configureStore } from "@reduxjs/toolkit";
import { ApiStore } from "./Apislice";
import Uislice from "./reducers/Uislice";


export const store = configureStore({
    reducer: {
        Uislice,
        [ApiStore.reducerPath]: ApiStore.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ApiStore.middleware)
})