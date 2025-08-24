import { useState } from "react";
import CamperReviews from "../CamperReviews/CamperReviews.jsx";
import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import CamperInfo from "../CamperInfo/CamperInfo.jsx";
import BookingForm from "../BookingForm/BookingForm";
import s from "./CamperDetails.module.css";
import Line from "../Line/Line.jsx";

export default function CamperDetails({ camper }) {
  const [active, setActive] = useState("Features");
  const featuresClass = `${active === "Features" ? s.tabActive : ""} ${s.tab}`;
  const reviewsClass = `${active === "Reviews" ? s.tabActive : ""} ${s.tab}`;

  return (
    <div className={s.section}>
      <CamperInfo camper={camper} goToTab={setActive} />

      <div className={s.wrapper}>
        <div className={s.header}>
          <h3 className={featuresClass} onClick={() => setActive("Features")}>
            Features
          </h3>
          <h3 className={reviewsClass} onClick={() => setActive("Reviews")}>
            Reviews
          </h3>
          <div className={s.tabsHeaderLine}></div>
          <Line className={s.underLine} />
        </div>

        <div className={s.content}>
          {active === "Features" && <CamperFeatures camper={camper} />}
          <div id="reviews">
            {active === "Reviews" && <CamperReviews camper={camper} />}
          </div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
