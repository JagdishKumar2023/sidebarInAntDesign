import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  BarsOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
const MenuList = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>

      <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>

      <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key="task-1">Task1</Menu.Item>

        <Menu.Item key="task-2">Task2</Menu.Item>

        <Menu.SubMenu key="subtasks" title="Subtasks">
          <Menu.Item key="subtask-1">Subtask 1</Menu.Item>
          <Menu.Item key="subtask-2">Subtask 2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>

      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>

      <Menu.Item key="payment" icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>

      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
