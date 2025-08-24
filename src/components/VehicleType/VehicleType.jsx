import { selectFilter } from "../../redux/filter/selector.js";
import { changeFilter } from "../../redux/filter/filterSlice.js";
import Line from "../Line/Line.jsx";
import { useSelector, useDispatch } from "react-redux";
import s from "./VehicleType.module.css";
import vehicleOptions from "../../constants/vehicleOptions.js";

export default function VehicleType() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const selectedForm = filters.form;

  const handleSelect = (type) => {
    dispatch(changeFilter({ filter: "form", value: type }));
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Vehicle Type</h2>
      <Line />
      <div className={s.iconsWrapper}>
        {vehicleOptions.map(({ key, label, value, icon: Icon }) => (
          <button
            key={key}
            value={value}
            type="button"
            className={`${s.iconButton}  ${
              selectedForm === label ? s.selected : ""
            }`}
            onClick={() => handleSelect(label)}
          >
            <Icon />
            <span>{value}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
