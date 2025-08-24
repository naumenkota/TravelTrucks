import s from "./CamperReviews.module.css";

import YellowStar from "../../assets/YellowStar.svg?react";
import WhiteStar from "../../assets/WhiteStar.svg?react";

export default function CamperReviews({ camper }) {
  const reviews = camper.reviews;
  const totalRating = 5;

  return (
    <div className={s.wrapper}>
      <ul className={s.reviewsList}>
        {reviews.map((review, index) => (
          <li key={index}>
            <div className={s.listWrapper}>
              <div className={s.avatar}>
                {review.reviewer_name[0].toUpperCase()}
              </div>
              <div className={s.rightSide}>
                <p className={s.name}>{review.reviewer_name}</p>

                <div className={s.stars}>
                  {Array.from({ length: totalRating }, (_, index) =>
                    index < review.reviewer_rating ? (
                      <YellowStar key={index} className={s.star} />
                    ) : (
                      <WhiteStar key={index} className={s.star} />
                    )
                  )}
                </div>
              </div>
            </div>
            <div className={s.comment}>{review.comment}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
