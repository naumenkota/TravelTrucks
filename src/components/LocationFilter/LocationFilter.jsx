import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/filterSlice.js";
import { selectLocation } from "../../redux/filter/selector.js";
import { selectCampersItems } from "../../redux/campers/selector.js";
import MapIcon from "../../assets/Map.svg?react";
import s from "./LocationFilter.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LocationFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);
  const campers = useSelector(selectCampersItems);
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    const locationFromUrl = searchParams.get("location") || "";
    if (locationFromUrl !== location) {
      dispatch(changeFilter({ filter: "location", value: locationFromUrl }));
    }
  }, [dispatch, searchParams, location]);

  const handleChange = async (e) => {
    const value = e.target.value;
    dispatch(changeFilter({ filter: "location", value }));
    setSearchParams({ location: value });

    const uniqueLocations = [...new Set(campers.map((city) => city.location))];

    const matches = uniqueLocations
      .map((loc) => {
        const [country, city] = loc.split(", ");
        return `${city}, ${country}`;
      })
      .filter((loc) =>
        loc.toLowerCase().trim().startsWith(value.toLowerCase())
      );
    setFilteredLocations(matches);
  };

  const handleSelect = (loc) => {
    dispatch(changeFilter({ filter: "location", value: loc }));
    setSearchParams({ location: loc });
    setFilteredLocations([]);
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
            onChange={handleChange}
            autoComplete="off"
          />
          {filteredLocations.length > 0 && (
            <ul className={s.autocompleteList}>
              {filteredLocations.map((loc) => (
                <li key={loc} onClick={() => handleSelect(loc)}>
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>
      </label>
    </div>
  );
}
