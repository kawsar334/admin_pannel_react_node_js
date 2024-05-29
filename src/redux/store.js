
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import authSlice from "./authSlice";
import CartSlice from "./CartSlice";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key:"Admin",
//     version:1,
//     storage,

// };
// const rootReducer = combineReducers({ user:authSlice,product:productSlice,});
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })
// export let persistor = persistStore(store);
// export default store;



const store = configureStore({
    reducer: {
        user: authSlice,
        cart:CartSlice
    },
});

export default store;
