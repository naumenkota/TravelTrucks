import LocationFilter from "../LocationFilter/LocationFilter.jsx";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../VehicleType/VehicleType.jsx";
import Button from "../Button/Button.jsx";
import s from "./FilterPanel.module.css";
import Container from "../Container/Container.jsx";

export default function FilterPanel() {
  return (
    <div>
      <Container>
        <LocationFilter />
        <h3 className={s.title}>Filters</h3>
        <div className={s.filtersWrapper}>
          <VehicleEquipment />
          <VehicleType />
        </div>
        <Button>Search</Button>
      </Container>
    </div>
  );
}
