import { NavLink } from "react-router-dom";
import "./filters.scss";

function Filters() {
  return (
    <div className="filters">
      <nav>
        <ul>
          <li>
            <NavLink to="/collection/playlists">Playlists</NavLink>
          </li>
          <li>
            <NavLink to="/collection/podcasts">Podcasts</NavLink>
          </li>
          <li>
            <NavLink to="/collection/artists">Artists</NavLink>
          </li>
          <li>
            <NavLink to="/collection/albums">Albums</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Filters;
