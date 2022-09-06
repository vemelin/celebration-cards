import Container from '../Container/Container';
import DropDown from './DropDown/DropDown';
import style from './Header.module.css';
import { useDispatch } from 'react-redux';
import { fetchText } from '../../store/textSlice';
import { fetchImage } from '../../store/imageSlice';
import { useParams } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const {holiday} = useParams();
    return (
        <header className={style.header}>
            <Container>
                <div className={style.wrapper}>
                    <div className={style.buttons}>
                        <button className={style.button} disabled={!holiday} onClick={() => {
                            dispatch(fetchText(holiday))
                        }}>Поменять поздравление</button>
                        <button className={style.button} onClick={
                            () => {
                                dispatch(fetchImage(holiday));
                            }}
                        >Поменять Фон</button>
                    </div>
                    <DropDown />
                </div>
            </Container>
        </header>
    );
}

export default Header;