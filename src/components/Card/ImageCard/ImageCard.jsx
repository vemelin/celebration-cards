import { useSelector } from 'react-redux';
import CardBackground from '../../img/card-w-06.jpg';

const ImageCard = (props) => {
    const {urlImg} = useSelector(state => state.image);

    return (
        <img src={urlImg || CardBackground} alt='' width={840} height={520} />
    )
};

export default ImageCard;