import Icon from "../Icons";
import "./topbar.scss";

function Topbar() {
  return (
    <header>
      <div className="navigation-arrows">
        <button name="Go Prev">
          <Icon name="navigationPrev" size={16} />
        </button>
        <button name="Go Forward" disabled>
          <Icon name="navigationNext" size={16} />
        </button>
      </div>
      <button className="user-profile">
        <img src="https://i.scdn.co/image/ab6775700000ee859e36edc9c5e37682327654e2" />
        <span>fared.wav</span>
        <Icon name="dropDown" size={16} />
      </button>
    </header>
  );
}

export default Topbar;
