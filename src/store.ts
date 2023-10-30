import { configureStore } from '@reduxjs/toolkit';
// import hostReducer from './host/hostSlice'
import appSwitcherReducer from './host/appSwitcherSlice'
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    // host: hostReducer,
    appSwitcher: appSwitcherReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
