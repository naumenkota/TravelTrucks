import WindIcon from "../assets/wind.svg?react";
import AutomaticIcon from "../assets/automatic.svg?react";
import KitchenIcon from "../assets/kitchen.svg?react";
import TVIcon from "../assets/tv.svg?react";
import ShowerIcon from "../assets/shower.svg?react";
import RefrigeratorIcon from "../assets/refrigerator.svg?react";
import GasIcon from "../assets/gas.svg?react";
import WaterIcon from "../assets/water.svg?react";
import MicrowaveIcon from "../assets/microwave.svg?react";
import RadioIcon from "../assets/radio.svg?react";
import PetrolIcon from "../assets/petrol.svg?react";

const camperOptions = [
  {
    key: "transmission",
    label: "Automatic",
    value: "automatic",
    icon: AutomaticIcon,
  },
  {
    key: "AC",
    label: "AC",
    value: "true",
    icon: WindIcon,
  },
  {
    key: "engine",
    label: "Petrol",
    value: "petrol",
    icon: PetrolIcon,
  },
  {
    key: "kitchen",
    label: "Kitchen",
    value: "true",
    icon: KitchenIcon,
  },

  {
    key: "TV",
    label: "TV",
    value: "true",
    icon: TVIcon,
  },
  {
    key: "bathroom",
    label: "Bathroom",
    value: "true",
    icon: ShowerIcon,
  },
  {
    key: "radio",
    label: "Radio",
    value: "true",
    icon: RadioIcon,
  },
  {
    key: "refrigerator",
    label: "Refrigerator",
    value: "true",
    icon: RefrigeratorIcon,
  },
  {
    key: "microwave",
    label: "Microwave",
    value: "true",
    icon: MicrowaveIcon,
  },
  {
    key: "gas",
    label: "Gas",
    value: "true",
    icon: GasIcon,
  },
  {
    key: "water",
    label: "Water",
    value: "true",
    icon: WaterIcon,
  },
];

export default camperOptions;
