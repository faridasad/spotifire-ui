import { ReactNode, useEffect } from "react";
import useAuthStore from "../../store/auth";
import { shallow } from "zustand/shallow";
import { Menu } from "@headlessui/react";
import Icon from "../Icons";
import "./topbar.scss";

const code = new URLSearchParams(window.location.search).get("code");
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${
  import.meta.env.VITE_CLIENT_ID
}&response_type=code&redirect_uri=${
  import.meta.env.VITE_REDIRECT_URI
}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

function Topbar({ children }: { children?: ReactNode }) {
  const [accessToken, login] = useAuthStore(
    (state) => [
      state.accessToken,
      state.login,
    ],
    shallow
  );

  useEffect(() => {
    if (code === null) {
      console.log("code is null");
      return;
    }
    try {
      login(code);
      console.log("logged in");
      window.history.pushState({}, "", "/");
    } catch (err) {
      window.location.href = "/";
      console.log("error logging in");
    }
  }, [login]);


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
      <div className="child-comp">{children !== null && children}</div>
      {accessToken === null ? (
        <a className="login-button" href={AUTH_URL}>
          <span>Login</span>
        </a>
      ) : (
        <Menu as="div" className="profile-con">
          <Menu.Button className="user-profile">
            <img src="https://i.scdn.co/image/ab6775700000ee859e36edc9c5e37682327654e2" />
            <span>fared.wav</span>
            <Icon name="dropDown" size={16} />
          </Menu.Button>
          <Menu.Items className="menu-items">
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && "active"}`}>
                  <span>Account</span>
                  <Icon name="externalLink" size={16} />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && "active"}`}>Profile</a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && "active"}`}>Settings</a>
              )}
            </Menu.Item>
            <span className="menu-divider"></span>
            <Menu.Item>
              {({ active }) => (
                <a className={`${active && "active"}`}>Log Out</a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      )}
    </header>
  );
}

export default Topbar;
