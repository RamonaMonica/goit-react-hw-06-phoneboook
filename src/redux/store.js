import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'], // adăugăm 'filter' în blacklist pentru a exclude starea de filtru din stocare
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [persistedReducer, persistStore],
      },
    }),
});

export const persistor = persistStore(store);

// Adăugați funcția de purge a stării pentru a elimina datele din localStorage
export const purgeStore = () => {
  persistor.purge();
};

export { store };
