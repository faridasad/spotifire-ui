import Icon from "../Icons";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo-con">
        <NavLink to="/" className="brand-logo">
          <Icon name="logo" size={131} />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/">
            <Icon name="home" size={24} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <Icon name="search" size={24} />
            <span>Search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection">
            <Icon name="library" size={24} />
            <span>Your Library</span>
          </NavLink>
        </li>
      </ul>

      <div className="bottom">
        <div className="create-playlist">
          <button>
            <div className="icon-con create">
              <Icon name="plus" size={12} />
            </div>
            <span>Create Playlist</span>
          </button>
        </div>
        <div className="liked-songs">
          <button>
            <div className="icon-con liked">
              <Icon name="heart" size={12} />
            </div>
            <span>Liked Songs</span>
          </button>
        </div>

        <span className="divider"></span>

        <div className="playlists">
          <ul role="list" tabIndex={0}>
            <li>
              <span>Playlist 1</span>
            </li>
            <li>
              <span>Playlist 2</span>
            </li>
            <li>
              <span>Playlist 3</span>
            </li>
            <li>
              <span>Playlist 4</span>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="install-app">
        <NavLink to="/download">
          <Icon name="download" size={24} />
          <span>Install App</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
