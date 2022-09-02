import style from './Card.module.css';
import CelebrationText from './CelebrationText/CelebrationText';
import ImageCard from './ImageCard/ImageCard';
import CardBackground from '../img/card-w-06.jpg';

const Card = () => (
    <div className={style.card}>
    <div className={style.wrapper}>
      <div className={style.image}>
        <ImageCard img = {CardBackground} />
        <CelebrationText />
      </div>
    </div>
  </div>
);

export default Card;