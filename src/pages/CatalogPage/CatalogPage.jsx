import LocationFilter from "../../components/LocationFilter/LocationFilter.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/api/api.js";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, perPage: 4 }));
  }, [dispatch]);

  return (
    <>
      <LocationFilter />
    </>
  );
}
