import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/filterSlice.js";
import { selectFilter } from "../../redux/filter/selector.js";
import s from "./VehicleEquipment.module.css";
import equipmentOptions from "../../constants/equipmentOptions.js";
import Divider from "../../assets/divider.svg?react";

export default function VehicleEquipment() {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(selectFilter);

  const handleSelect = (option) => {
    if (option.key === "transmission") {
      const currentValue = selectedFilters.transmission;
      dispatch(
        changeFilter({
          filter: "transmission",
          value: currentValue === option.value ? null : option.value,
        })
      );
    } else {
      const currentValue = selectedFilters[option.key];
      dispatch(
        changeFilter({
          filter: option.key,
          value: !currentValue,
        })
      );
    }
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Vehicle equipment</h2>
      <Divider />
      <div className={s.iconsWrapper}>
        {equipmentOptions.map((option) => {
          const Icon = option.icon;
          const isActive =
            option.key === "transmission"
              ? selectedFilters.transmission === option.value
              : selectedFilters[option.key];

          return (
            <button
              key={option.key}
              className={`${s.iconButton} ${isActive ? s.selected : ""}`}
              onClick={() => handleSelect(option)}
            >
              <Icon />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
