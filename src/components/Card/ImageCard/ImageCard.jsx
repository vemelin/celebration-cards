import { useContext } from 'react';
import { imgContext } from '../../../context/imgContext';
import style from './Image.module.css';

const ImageCard = (props) => {

    const img = useContext(imgContext);
    console.log('img: ', img);

    return (
        <img className={style.img} src={props.img} alt='The background of image' width={840} height={520} />
    )
};

export default ImageCard;