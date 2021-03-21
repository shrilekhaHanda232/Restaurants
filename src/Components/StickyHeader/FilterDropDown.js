import { Menu, Dropdown, Button } from "antd";
import { DownOutlined, CloseCircleTwoTone } from "@ant-design/icons";

const { SubMenu } = Menu;

const menuListHandler = (props) => {
  let { menuList, handleMenuClick, selectedSearchKeys, searchVal } = props;
  let menuGroup = [];
  for (let item in menuList) {
    let values = Object.keys(menuList[item]);
    let menuItems = [];

    values.map((value) => {
      menuItems.push(
        <Menu.Item key={value} title={item}>
          {value}
        </Menu.Item>
      );
    });
    if (menuItems.length) {
      menuGroup.push(
        <SubMenu popupClassName="filter-sub-menu" title={item}>
          {menuItems}
        </SubMenu>
      );
    }
  }
  return (
    <Menu onClick={handleMenuClick} selectedKeys={selectedSearchKeys}>
      {menuGroup}
    </Menu>
  );
};

function FilterDropDown(props) {
  return (
    <Dropdown trigger={["click"]} overlay={menuListHandler(props)}>
      <Button
        className="filter-dropdown-btn"
        onMouseOver={() => {
          if (props.searchVal && !props.showClose) props.setShowClose(true);
        }}
        onMouseOut={() => {
          if (props.searchVal && props.showClose) props.setShowClose(false);
        }}
      >
        {props.searchVal ? (
          <div className="color-black">{props.searchVal}</div>
        ) : (
          "Please Select"
        )}
        {props.showClose ? (
          <CloseCircleTwoTone
            className="close-btn"
            twoToneColor="#d9d9d9"
            onClick={props.closeHandler}
          />
        ) : (
          <DownOutlined />
        )}
      </Button>
    </Dropdown>
  );
}

export default FilterDropDown;
