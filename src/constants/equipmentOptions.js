import WindIcon from "../assets/wind.svg?react";
import AutomaticIcon from "../assets/automatic.svg?react";
import KitchenIcon from "../assets/kitchen.svg?react";
import TVIcon from "../assets/tv.svg?react";
import ShowerIcon from "../assets/shower.svg?react";

const equipmentOptions = [
  { key: "AC", label: "AC", icon: WindIcon },
  {
    key: "transmission",
    label: "Automatic",
    value: "automatic",
    icon: AutomaticIcon,
  },
  { key: "kitchen", label: "Kitchen", icon: KitchenIcon },
  { key: "TV", label: "TV", icon: TVIcon },
  { key: "bathroom", label: "Bathroom", icon: ShowerIcon },
];

export default equipmentOptions;
