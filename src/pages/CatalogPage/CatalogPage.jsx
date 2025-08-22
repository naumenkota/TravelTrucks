import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/api/api.js";
import Button from "../../components/Button/Button.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, perPage: 4 }));
  }, [dispatch]);

  return (
    <div>
      <FilterPanel />
    </div>
  );
}
