import { useState } from "react";
import Heart from "../../assets/heart.svg?react";
import HeartPressed from "../../assets/heart-pressed.svg?react";
import s from "./FavoriteToggle.module.css";

export default function FavoriteToggle({ init = false, onChange }) {
  const [isFavorite, setIsFavorite] = useState(init);

  const toggle = () => {
    setIsFavorite((prev) => !prev);
    if (onChange) onChange(!isFavorite);
  };

  return (
    <button className={s.btn} onClick={toggle}>
      {isFavorite ? <HeartPressed /> : <Heart />}
    </button>
  );
}
