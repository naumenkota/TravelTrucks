import { selectForm } from "../../redux/filter/selector.js";
import { changeFilter } from "../../redux/filter/filterSlice.js";
import Divider from "../../assets/divider.svg?react";
import { useSelector, useDispatch } from "react-redux";
import s from "./VehicleType.module.css";
import vehicleOptions from "../../constants/vehicleOptions.js";

export default function VehicleType() {
  const dispatch = useDispatch();
  const selectedForm = useSelector(selectForm);

  const handleSelect = (type) => {
    dispatch(changeFilter({ filter: "form", value: type }));
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Vehicle Type</h2>
      <Divider />
      <div className={s.iconsWrapper}>
        {vehicleOptions.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            type="button"
            className={`${s.iconButton}  ${
              selectedForm === label ? s.selected : ""
            }`}
            onClick={() => handleSelect(label)}
          >
            <Icon />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
