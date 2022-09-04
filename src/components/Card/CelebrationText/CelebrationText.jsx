import style from './CelebrationText.module.css';
import { useSelector } from 'react-redux';

const CelebrationText = () => {
    const {text, loading} = useSelector(state => state.text);

    return (
        <p className={style.celebrationText}>
            {loading === 'loading' ? 'Загрузка...' : text === '' ? 'Выберите повод для поздравления' : text}
        </p>
    )
};

export default CelebrationText;