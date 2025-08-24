import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../VehicleType/VehicleType.jsx";
import Button from "../Button/Button.jsx";
import s from "./FilterPanel.module.css";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selector.js";

export default function FilterPanel() {
  const filters = useSelector(selectFilter);
  const handleSearch = () => {
    console.log("обрані фільтри:", filters);
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
