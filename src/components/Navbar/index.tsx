import Icon from "../Icons";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo-con">
        <Link to="/" className="brand-logo">
          <Icon name="logo" size={131} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">
            <Icon name="home" size={24} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <Icon name="search" size={24} />
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link to="/collection">
            <Icon name="library" size={24} />
            <span>Your Library</span>
          </Link>
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
        <Link to="/download">
          <Icon name="download" size={24} />
          <span>Install App</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
