import "./collection.scss";
import { useLocation } from "react-router-dom";

function Collection() {
  const location = useLocation();

  return <div className="collection">{location.pathname.split("/")[2]}</div>;
}

export default Collection;
