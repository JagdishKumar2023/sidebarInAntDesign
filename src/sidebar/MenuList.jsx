import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  PieChartOutlined, 
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
        Dashboard
      </Menu.Item>

      <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        User Management
      </Menu.Item>
      <Menu.Item key="subtask-1" icon={<PieChartOutlined/>}>Winning Management</Menu.Item>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        Recharge Request
      </Menu.Item>

      <Menu.Item key="payment" icon={<PayCircleOutlined />}>
        Withdrawals Request
      </Menu.Item>

      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Trade History
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
