import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/filterSlice.js";
import { selectFilter } from "../../redux/filter/selector.js";
import MapIcon from "../../assets/Map.svg?react";
import s from "./LocationFilter.module.css";

export default function LocationFilter() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const location = filters.location;

  const handleChange = (value) => {
    const city = value.includes(",") ? value.split(",")[1].trim() : value;
    dispatch(changeFilter({ filter: "location", value: city }));
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor="location" className={s.label}>
        Location
        <div className={s.inputWrapper}>
          <MapIcon className={`${s.icon} ${location ? s.selected : ""}`} />
          <input
            type="text"
            id="location"
            className={`${s.select} ${!location ? s.placeholder : ""}`}
            placeholder="City"
            value={location}
            onChange={(e) => handleChange(e.target.value)}
            autoComplete="off"
          />
        </div>
      </label>
    </div>
  );
}
