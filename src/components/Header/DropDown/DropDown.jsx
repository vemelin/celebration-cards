import { useEffect, useState } from 'react';
import style from './DropDown.module.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchHolidays } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';
import { fetchImage } from '../../../store/imageSlice';
import { NavLink, useParams } from 'react-router-dom';

const DropDown = () => {
    const [isOpenSelector, setIsOpenSelector] = useState(false);
    const {holidays, loading} = useSelector(state => state.holidays);
    const dispatch = useDispatch();
    const {holiday} = useParams();

    const toggleSelector = () => {
        if(loading !== 'success') return;
        setIsOpenSelector(!isOpenSelector)
    };

    useEffect(() => {
        dispatch(fetchHolidays());
        if(holiday) {
            dispatch(fetchText(holiday));
            dispatch(fetchImage(holiday));
        }
    }, [dispatch, holiday])

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleSelector}>{loading !== 'success' ? 'Загрузка...' : holidays[holiday] || 'Выбрать праздник'}</button>
            {isOpenSelector && (
                    <ul className={style.list}>
                        {Object.entries(holidays).map(item => (
                            <li className={style.item} key={item[0]} onClick={() => {
                                toggleSelector();
                            }}><NavLink to={`card/${item[0]}`} className={
                                ({isActive}) => (isActive ? style.linkActive : '')
                            }>{item[1]}</NavLink></li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default DropDown;