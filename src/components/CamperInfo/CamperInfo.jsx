import s from "./CamperInfo.module.css";
import YellowStar from "../../assets/YellowStar.svg?react";
import MapIcon from "../../assets/Map.svg?react";

export default function CamperInfo({ camper, goToTab }) {
  const loc = camper.location.split(", ").reverse().join(", ");

  const handleReviewsClick = () => {
    goToTab("Reviews");
    setTimeout(() => {
      document
        .getElementById("reviews")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.generalInfo}>
        <h2 className={s.name}>{camper.name}</h2>

        <div className={s.rateLoc}>
          <div className={s.ratingBlock}>
            <YellowStar />
            <div className={s.rating}>
              <span onClick={handleReviewsClick}>{camper.rating}</span>
              <span onClick={handleReviewsClick}>
                ({camper.reviews.length} Reviews)
              </span>
            </div>
          </div>

          <div className={s.locationBlock}>
            <MapIcon />
            <span>{loc}</span>
          </div>
        </div>

        <p className={s.price}>€{camper.price}.00</p>
      </div>

      <div className={s.images}>
        {camper.gallery.map((image) => (
          <img
            key={image.thumb}
            src={image.thumb}
            alt={camper.name}
            className={s.image}
          />
        ))}
      </div>
      <p className={s.desc}>{camper.description}</p>
    </div>
  );
}
