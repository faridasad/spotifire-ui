import Icon from "../Icons";
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-wrapper__left">
          <div className="audio-image">
            <img src="https://i.scdn.co/image/ab67616d00004851d4be605a267df4e9a09f6245" />
          </div>
          <div className="audio-info">
            <div className="audio-info__title">Blow Horn Joint</div>
            <div className="audio-info__artist">DJ Premier</div>
          </div>
          <button role="switch">
            <Icon name="heart" size={16} />
          </button>
        </div>
        <div className="footer-wrapper__center">
          <div className="player-controls">
            <div className="player-controls__left">
              <button role="switch">
                <Icon name="shuffle" size={16} />
              </button>
              <button>
                <Icon name="previous" size={16} />
              </button>
            </div>
            <div className="player-controls__play">
              <button>
                <Icon name="play" size={16} />
              </button>
            </div>
            <div className="player-controls__right">
              <button>
                <Icon name="next" size={16} />
              </button>
              <button role="switch">
                <Icon name="repeat" size={16} />
              </button>
            </div>
          </div>
          <div className="audio-slider">Slider</div>
        </div>
        <div className="footer-wrapper__right">
          <button role="switch">
            <Icon name="queue" size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
