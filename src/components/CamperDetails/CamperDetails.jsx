import { useState } from "react";
import CamperReviews from "../CamperReviews/CamperReviews.jsx";
import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import CamperInfo from "../CamperInfo/CamperInfo.jsx";
import BookingForm from "../BookingForm/BookingForm";
import s from "./CamperDetails.module.css";
import Line from "../Line/Line.jsx";

export default function CamperDetails({ camper }) {
  const [active, setActive] = useState("Features");

  return (
    <div>
      <CamperInfo camper={camper} />
      <div className={s.wrapper}>
        <div className={s.header}>
          <h3
            className={`${active === "Features" ? s.tabActive : ""} ${s.tab}`}
            onClick={() => setActive("Features")}
          >
            Features
          </h3>
          <h3
            className={`${active === "Reviews" ? s.tabActive : ""} ${s.tab}`}
            onClick={() => setActive("Reviews")}
          >
            Reviews
          </h3>
          <div className={s.tabsHeaderLine}></div>
        </div>
        <Line />
        <div className={s.content}>
          <div className="left-side">
            {active === "Features" && <CamperFeatures camper={camper} />}
            {active === "Reviews" && <CamperReviews camper={camper} />}
          </div>
          <div className={s.form}>
            <BookingForm camper={camper} />
          </div>
        </div>
      </div>
    </div>
  );
}
