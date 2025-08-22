import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/filterSlice.js";
import { selectLocation } from "../../redux/filter/selector.js";
/*import { selectCampersItems } from "../../redux/campers/selector.js"; */
import MapIcon from "../../assets/Map.svg?react";
import s from "./LocationFilter.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function LocationFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const filters = useSelector(selectLocation);

  /*const campers = useSelector(selectCampersItems); 
  const cities = [
    ...new Set(
      campers.map((c) => {
        const [country, city] = c.location.split(", ");
        return `${city}, ${country}`;
      })
    ),
  ];*/

  useEffect(() => {
    const locationFromUrl = searchParams.get("location") || "";
    if (locationFromUrl !== filters.location) {
      dispatch(changeFilter({ filter: "location", value: locationFromUrl }));
    }
  }, [dispatch, searchParams, filters.location]);

  const handleChange = async (e) => {
    const value = e.target.value;
    dispatch(changeFilter({ filter: "location", value }));
    setSearchParams({ location: value });
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor="location" className={s.label}>
        Location
        <div className={s.inputWrapper}>
          <MapIcon
            className={`${s.icon} ${filters.location ? s.selected : ""}`}
          />
          <input
            type="text"
            id="location"
            className={`${s.select} ${!filters.location ? s.placeholder : ""}`}
            placeholder="City"
            value={filters.location}
            onChange={handleChange}
          />
        </div>
      </label>
    </div>
  );
}
