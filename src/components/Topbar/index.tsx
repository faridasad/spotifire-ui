import { ReactNode, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import Icon from "../Icons";
import "./topbar.scss";

function Topbar({ children }: { children?: ReactNode }) {

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
    </header>
  );
}

export default Topbar;
