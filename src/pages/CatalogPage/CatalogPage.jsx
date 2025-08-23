import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/api/api.js";
import Container from "../../components/Container/Container.jsx";
import Button from "../../components/Button/Button.jsx";
import CampersList from "../../components/CampersList/CampersList.jsx";
import {
  selectCampersItems,
  selectCampersLoading,
  selectCampersError,
} from "../../redux/campers/selector.js";
import s from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampersItems);
  const loading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <p>Loading campers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Container>
        <div className={s.content}>
          <FilterPanel />
          <CampersList campers={campers} />
        </div>
      </Container>
    </div>
  );
}
