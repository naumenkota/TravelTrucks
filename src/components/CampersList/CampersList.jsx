import CamperItem from "../CamperItem/CamperItem";
import s from "./CampersList.module.css";
import Button from "../Button/Button.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCampersTotal,
  selectCampersLoadingMore,
  selectCampersPage,
  selectCampersPerPage,
} from "../../redux/campers/selector.js";
import { fetchCampers } from "../../redux/api/api";

export default function CampersList({ campers }) {
  const dispatch = useDispatch();
  const loadingMore = useSelector(selectCampersLoadingMore);
  const total = useSelector(selectCampersTotal);
  const page = useSelector(selectCampersPage);
  const perPage = useSelector(selectCampersPerPage);

  const handleLoadMore = () => {
    dispatch(fetchCampers({ page: page + 1, perPage }));
  };

  console.log("CampersList campers:", campers);
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={s.item}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>

      {campers.length < total && !loadingMore && (
        <div className={s.moreWrapper}>
          <Button load={true} onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}
