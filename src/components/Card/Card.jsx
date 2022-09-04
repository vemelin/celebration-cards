import style from './Card.module.css';
import CelebrationText from './CelebrationText/CelebrationText';
import ImageCard from './ImageCard/ImageCard';

const Card = () => (
    <div className={style.card}>
    <div className={style.wrapper}>
      <div className={style.image}>
        <ImageCard />
        <CelebrationText />
      </div>
    </div>
  </div>
);

export default Card;