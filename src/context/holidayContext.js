import { createContext, useState } from 'react';
import { useHolidays } from '../hooks/useHolidays';

export const holidaysContext = createContext({});

export const HolidaysContextProvider = ({children}) => {
    const [holiday, setHoliday] = useState('');
    const [selectCelebrationItems] = useHolidays();

    const updateCelebrationState = title => {
        setHoliday(title);
    }

    return (
        <holidaysContext.Provider value={{selectCelebrationItems, holiday, updateCelebrationState}}>
            {children}
        </holidaysContext.Provider>
    );
};
