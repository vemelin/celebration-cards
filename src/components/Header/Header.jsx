import Container from '../Container/Container';
import DropDown from './DropDown/DropDown';
import style from './Header.module.css';

const Header = () => (
    <header className={style.header}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.buttons}>
                    <button className={style.button}>Поменять поздравление</button>
                    <button className={style.button}>Поменять Фон</button>
                </div>
                <DropDown />
            </div>
        </Container>
    </header>
);

export default Header;