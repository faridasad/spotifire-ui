import { ReactNode, useEffect } from "react";
import useAuthStore from "../../store/auth";
import { Menu } from "@headlessui/react";
import Icon from "../Icons";
import "./topbar.scss";
import axios from "axios";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${
  import.meta.env.VITE_CLIENT_ID
}&response_type=code&redirect_uri=${
  import.meta.env.VITE_REDIRECT_URI
}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

function Topbar({children, code}: {children?: ReactNode, code?: string | null}) {
  const authStore = useAuthStore();

  useEffect(() => {
    if (code === null || authStore.accessToken !== null) return;

    if (code && authStore.accessToken === null) {
      try {
        authStore.login(code);
        window.history.pushState({}, "", "/");
      } catch (err) {
        window.location.href = "/";
      }
    }
  }, [code, authStore]);

  useEffect(() => {
    if (!authStore.refreshToken || !authStore.expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post("http://localhost:5000/refresh", {
          refreshToken: authStore.refreshToken,
        })
        .then((res) => {
          authStore.updateAccessToken(res.data.accessToken);
        })
        .catch(() => {
          window.location.href = "/";
        });
    }, (authStore.expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [authStore]);

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
      {authStore.accessToken === null ? (
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
                <a
                  className={`${active && "active"}`}
                  onClick={() => {
                    authStore.clear();
                  }}
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      )}
    </header>
  );
}

export default Topbar;
