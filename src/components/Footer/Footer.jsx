import Container from '../Container/Container';
import style from './Footer.module.css';
import { ReactComponent as VkIcon } from '../img/vk.svg';
import { ReactComponent as TgIcon } from '../img/tg.svg';
import { ReactComponent as PinterestIcon } from '../img/pinterest.svg';
import { ReactComponent as StumbleuponIcon } from '../img/stumbleupon.svg';

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href='https://t.me'>Anastasia Ilina</a></p>
                    <p>Coder: <a href='https://t.me'>V. Pupkin</a></p>
                    <p>Celebration Service Card, 2022</p>
                </div>
                <ul className={style.social}>
                    <li className={style.item}>
                        <a href='https://vk.com' className={style.link}>
                            <VkIcon/>
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://t.me' className={style.link}>
                            <TgIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://facebook.com' className={style.link}>
                            <PinterestIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href='https://stumb.com' className={style.link}>
                            <StumbleuponIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;