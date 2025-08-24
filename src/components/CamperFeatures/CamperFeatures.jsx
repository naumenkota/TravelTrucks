import camperOptions from "../../constants/camperOptions";
import s from "./CamperFeatures.module.css";
import Line from "../Line/Line.jsx";
import vehicleOptions from "../../constants/vehicleOptions";

export default function CamperFeatures({ camper }) {
  const getForm = (form) => {
    const option = vehicleOptions.find((option) => option.key === form);
    return option ? option.value : form;
  };

  return (
    <div className={s.wrapper}>
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
      <div className={s.vehicleDetails}>
        <h2 className={s.title}>Vehicle Details</h2>
        <Line />
        <ul className={s.detailList}>
          <li className={s.detailItem}>
            <p>Form:</p> <p>{getForm(camper.form)}</p>
          </li>
          <li className={s.detailItem}>
            <p>Length:</p> <p>{camper.length}</p>
          </li>
          <li className={s.detailItem}>
            <p>Width:</p> <p>{camper.width}</p>
          </li>
          <li className={s.detailItem}>
            <p>Height:</p> <p>{camper.height}</p>
          </li>
          <li className={s.detailItem}>
            <p>Tank:</p> <p>{camper.tank}</p>
          </li>
          <li className={s.detailItem}>
            <p>Consumption:</p> <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
