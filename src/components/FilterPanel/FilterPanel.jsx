import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../VehicleType/VehicleType.jsx";
import Button from "../Button/Button.jsx";
import s from "./FilterPanel.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/filter/selector.js";
import { fetchCampers } from "../../redux/api/api.js";
import { resetCampers } from "../../redux/campers/campersSlice.js";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { changeFilter } from "../../redux/filter/filterSlice.js";

export default function FilterPanel() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const newFilters = {
      page: 1,
      location: searchParams.get("location") || "",
      form: searchParams.get("form") || "",
      AC: searchParams.get("AC") || "",
      transmission: searchParams.get("transmission") || "",
      kitchen: searchParams.get("kitchen") || "",
      TV: searchParams.get("TV") || "",
      bathroom: searchParams.get("bathroom") || "",
    };

    dispatch(changeFilter(newFilters));
  }, [searchParams, dispatch]);

  const filters = useSelector(selectFilter);

  const handleSearch = () => {
    dispatch(resetCampers());

    dispatch(fetchCampers({ page: 1, perPage: 4, filters }));
  };

  return (
    <div>
      <LocationFilter />
      <h3 className={s.title}>Filters</h3>
      <VehicleEquipment />
      <VehicleType />

      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}
