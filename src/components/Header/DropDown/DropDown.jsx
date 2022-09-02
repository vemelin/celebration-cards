import { useContext, useState } from 'react';
import { holidaysContext } from '../../../context/holidayContext';
import style from './DropDown.module.css';

const DropDown = () => {
    const [isOpenSelector, setIsOpenSelector] = useState(false);
    const {selectCelebrationItems, holiday, updateCelebrationState} = useContext(holidaysContext);

    const toggleSelector = () => {
        setIsOpenSelector(!isOpenSelector)
    };

    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={toggleSelector}>{selectCelebrationItems[holiday] || 'Выбрать праздник'}</button>
            {isOpenSelector && (
                    <ul className={style.list}>
                        {Object.entries(selectCelebrationItems).map(item => (
                            <li className={style.item} key={item[0]} onClick={() => {
                                updateCelebrationState(item[0]);
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