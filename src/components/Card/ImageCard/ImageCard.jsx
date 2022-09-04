import { useContext } from 'react';
import { imgContext } from '../../../context/imgContext';
import CardBackground from '../../img/card-w-06.jpg';

const ImageCard = (props) => {

    const {urlImg} = useContext(imgContext);

    return (
        <img src={urlImg || CardBackground} alt='' width={840} height={520} />
    )
};

export default ImageCard;