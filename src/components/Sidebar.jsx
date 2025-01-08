import { Button, Layout, theme } from "antd";
import "./Sidebar.css";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useState } from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Sider, Header } = Layout;

const Sidebar = () => {
  // Internal state for managing theme
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
      >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton toggleTheme={toggleTheme} darkTheme={darkTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            onClick={() => setCollapsed(!collapsed)}
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          ></Button>
        </Header>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
