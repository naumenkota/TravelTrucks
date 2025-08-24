import FullyIcon from "../assets/fullyintegrated.svg?react";
import AlcoveIcon from "../assets/alcove.svg?react";
import VanIcon from "../assets/Van.svg?react";

const vehicleOptions = [
  { key: "panelTruck", label: "panelTruck", value: "Van", icon: VanIcon },
  {
    key: "fullyIntegrated",
    label: "fullyIntegrated",
    value: "Fully Integrated",
    icon: FullyIcon,
  },
  { key: "alcove", label: "alcove", value: "Alcove", icon: AlcoveIcon },
];

export default vehicleOptions;
