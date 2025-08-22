import LocationFilter from "../../components/LocationFilter/LocationFilter.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/api/api.js";
import VehicleEquipment from "../../components/VehicleEquipment/VehicleEquipment.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, perPage: 4 }));
  }, [dispatch]);

  return (
    <>
      <VehicleEquipment />
    </>
  );
}
