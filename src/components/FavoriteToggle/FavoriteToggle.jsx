import Heart from "../../assets/heart.svg?react";
import HeartPressed from "../../assets/heart-pressed.svg?react";
import s from "./FavoriteToggle.module.css";

export default function FavoriteToggle({ isFavorite, onChange }) {
  return (
    <button className={s.btn} onClick={onChange}>
      {isFavorite ? <HeartPressed /> : <Heart />}
    </button>
  );
}
