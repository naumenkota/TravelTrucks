import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/filterSlice.js";
import { selectLocation } from "../../redux/filter/selector.js";
import { selectCampersItems } from "../../redux/campers/selector.js";
import MapIcon from "../../assets/Map.svg?react";
import s from "./LocationFilter.module.css";

export default function LocationFilter() {
  const dispatch = useDispatch();
  const filters = useSelector(selectLocation);
  const campers = useSelector(selectCampersItems);
  const cities = [...new Set(campers.map((c) => c.location))];
  const handleChange = (e) => {
    dispatch(changeFilter({ filter: "location", value: e.target.value }));
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor="location" className={s.label}>
        Location
        <div className={s.inputWrapper}>
          <MapIcon
            className={`${s.icon} ${filters.location ? s.selected : ""}`}
          />

          <select
            id="location"
            className={`${s.select} ${!filters.location ? s.placeholder : ""}`}
            value={filters.location}
            onChange={handleChange}
          >
            <option value="">City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </label>
    </div>
  );
}
