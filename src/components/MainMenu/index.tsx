import type { MenuProps } from "antd";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    label: "Option 1",
    key: "/page1",
    icon: <PieChartOutlined />,
  },
  {
    label: "Option 2",
    key: "/page2",
    icon: <DesktopOutlined />,
  },
  {
    label: "Option 3",
    key: "page3",
    icon: <UserOutlined />,
    children: [
      {
        label: "Option 301",
        key: "/page3/page301",
      },
      {
        label: "Option 302",
        key: "/page3/page302",
      },
      {
        label: "Option 303",
        key: "/page3/page303",
      },
    ],
  },
  {
    label: "Option 4",
    key: "page4",
    icon: <UserOutlined />,
    children: [
      {
        label: "Option 401",
        key: "/page4/page401",
      },
      {
        label: "Option 402",
        key: "/page4/page402",
      },
      {
        label: "Option 403",
        key: "/page4/page403",
      },
    ],
  },
];
const Comp: React.FC = () => {
  const navigateTo = useNavigate();
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };
  const [openKeys, setOpenKeys] = useState([""]);
  const menuChange = (keys: string[]) => {
    console.log(keys);
    setOpenKeys([keys[keys.length - 1]]);
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["/page1"]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={menuChange}
      openKeys={openKeys}
    />
  );
};
export default Comp;
