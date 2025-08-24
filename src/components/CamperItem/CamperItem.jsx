import FavoriteToggle from "../FavoriteToggle/FavoriteToggle";
import s from "./CamperItem.module.css";
import YellowStar from "../../assets/YellowStar.svg?react";
import MapIcon from "../../assets/Map.svg?react";
import Button from "../Button/Button.jsx";
import camperOptions from "../../constants/camperOptions.js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/favorite/favoritesSlice.js";

export default function CamperItem({ camper }) {
  const loc = camper.location.split(", ").reverse().join(", ");
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div className={s.camperItem}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={s.image}
      />
      <div>
        <div className={s.info}>
          <div className={s.wrapperInfo}>
            <div className={s.topInfo}>
              <h2 className={s.name}>{camper.name}</h2>

              <div className={s.wrapperToggle}>
                <p className={s.price}> €{camper.price}.00</p>

                <FavoriteToggle
                  isFavorite={favorites.includes(camper.id)}
                  onChange={() => dispatch(toggleFavorite(camper.id))}
                />
              </div>
            </div>

            <div className={s.rateLoc}>
              <div className={s.ratingBlock}>
                <YellowStar />
                <span className={s.rating}>{camper.rating}</span>
                <span className={s.reviews}>
                  ({camper.reviews.length} Reviews)
                </span>
              </div>

              <div className={s.locationBlock}>
                <MapIcon />
                <span>{loc}</span>
              </div>
            </div>
          </div>

          <p className={s.desc}>{camper.description}</p>

          <div className={s.features}>
            {camperOptions.map(({ key, label, icon: Icon }) =>
              camper[key] ? (
                <div key={key} className={s.feature}>
                  <Icon />
                  <span>{label}</span>
                </div>
              ) : null
            )}
          </div>
          <Button
            className={s.showMore}
            onClick={() => window.open(`/catalog/${camper.id}`, "_blank")}
          >
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
}
