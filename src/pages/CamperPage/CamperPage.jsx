import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import Container from "../../components/Container/Container.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/api/api.js";
import {
  selectSelectedCamper,
  selectCampersLoading,
  selectCampersError,
} from "../../redux/campers/selector.js";
import Loader from "../../components/Loader/Loader.jsx";

export default function CamperPage() {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const selectedCamper = useSelector(selectSelectedCamper);
  const loading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    if (camperId) {
      dispatch(fetchCamperById(camperId));
    }
  }, [dispatch, camperId]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!selectedCamper) return <p>Camper not found</p>;

  return (
    <>
      <Container>
        <CamperDetails camper={selectedCamper} />
      </Container>
    </>
  );
}
