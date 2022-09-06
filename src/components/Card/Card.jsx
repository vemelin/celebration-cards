import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchImageId } from '../../store/imageSlice';
import { fetchTextId } from '../../store/textSlice';
import style from './Card.module.css';
import CelebrationText from './CelebrationText/CelebrationText';
import ImageCard from './ImageCard/ImageCard';

const Card = () => {
  const {idText, idImg} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if(idText && idImg) {
      dispatch(fetchTextId(idText));
      dispatch(fetchImageId(idImg));
    }
  })

  return (
    <div className={style.card}>
    <div className={style.wrapper}>
      <div className={style.image}>
        <ImageCard />
        <CelebrationText />
      </div>
    </div>
  </div>
)
};

export default Card;