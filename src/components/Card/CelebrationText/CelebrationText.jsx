import { useContext } from 'react';
import { textContext } from '../../../context/textContext';
import style from './CelebrationText.module.css';

const CelebrationText = () => {
    const {text} = useContext(textContext);
    console.log(text);
    return (
        <p className={style.celebrationText}>
           {text}
        </p>
    )
};

export default CelebrationText;