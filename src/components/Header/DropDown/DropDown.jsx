import { useEffect, useState } from 'react';
import style from './DropDown.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchHolidays, setHoliday } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';

const DropDown = () => {
    const [isOpenSelector, setIsOpenSelector] = useState(false);
    const {holiday, holidays, loading} = useSelector(state => state.holidays);
    const dispatch = useDispatch();

    const toggleSelector = () => {
        if(loading !== 'success') return;
        setIsOpenSelector(!isOpenSelector)
    };

    useEffect(() => {
        dispatch(fetchHolidays());
    }, [dispatch])

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleSelector}>{loading !== 'success' ? 'Загрузка...' : holidays[holiday] || 'Выбрать праздник'}</button>
            {isOpenSelector && (
                    <ul className={style.list}>
                        {Object.entries(holidays).map(item => (
                            <li className={style.item} key={item[0]} onClick={() => {
                                dispatch(setHoliday(item[0]));
                                dispatch(fetchText(item[0]));
                                toggleSelector();
                            }}>{item[1]}</li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default DropDown;