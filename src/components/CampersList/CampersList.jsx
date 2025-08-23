import CamperItem from "../CamperItem/CamperItem";

import s from "./CampersList.module.css";

export default function CampersList({ campers }) {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={s.item}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
}
