import { configureStore } from '@reduxjs/toolkit';
import holidayReducer from './holidaysSlice';
import textReducer from './textSlice';

export const store = configureStore({
    reducer: {
        holidays: holidayReducer,
        text: textReducer,
    }
});