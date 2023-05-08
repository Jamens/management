import type { MenuProps } from "antd";
import React, { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
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
  const currentRoute = useLocation();
  function findKey(item: { key: string }) {
    return item.key === currentRoute.pathname;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let firstOpenKey = "";
  // for (let i = 0; i < items.length; i++) {
  //   if (
  //     items[i]!["children"] &&
  //     items[i]!["children"].length > 0 &&
  //     items[i]!["children"].find(findKey)
  //   ) {
  //     firstOpenKey = items[i]!.key as string;
  //     break;
  //   }
  // }
  items.forEach((item, i) => {
    if (
      item &&
      item[i] &&
      item[i]["children"] &&
      item[i]["children"].length > 0 &&
      item[i]["children"].find(findKey)
    ) {
      firstOpenKey = item[i].key as string;
      return;
    }
    console.log(i);
  });

  const [openKeys, setOpenKeys] = useState([""]);
  const menuChange = (keys: string[]) => {
    console.log(keys);
    setOpenKeys([keys[keys.length - 1]]);
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={menuChange}
      openKeys={openKeys}
    />
  );
};
export default Comp;
