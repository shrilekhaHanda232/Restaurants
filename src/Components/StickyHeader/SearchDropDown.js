import { Menu, Dropdown, Input } from "antd";

const { Search } = Input;

const menuListHandler = (props) => {
  let { menuList, handleMenuClick, selectedSearchKeys, searchVal } = props;
  let menuGroup = [];
  for (let item in menuList) {
    let values = Object.keys(menuList[item]);
    let menuItems = [];
    values.map((value) => {
      if (searchVal) {
        let shouldShow = value.toLowerCase().includes(searchVal.toLowerCase());
        if (shouldShow)
          menuItems.push(
            <Menu.Item key={value} title={item}>
              {value}
            </Menu.Item>
          );
      } else
        menuItems.push(
          <Menu.Item key={value} title={item}>
            {value}
          </Menu.Item>
        );
    });
    if (menuItems.length) {
      menuGroup.push(<Menu.ItemGroup title={item}>{menuItems}</Menu.ItemGroup>);
    }
  }
  return (
    <Menu
      onClick={(e) => handleMenuClick(e, true)}
      selectedKeys={selectedSearchKeys}
    >
      {menuGroup}
    </Menu>
  );
};

function SearchDropDown(props) {
  return (
    <Dropdown
      trigger={["click"]}
      overlay={menuListHandler(props)}
      overlayStyle={{ maxHeight: "300px", overflowY: "scroll" }}
    >
      <Search
        placeholder="Search Restaurants..."
        onChange={props.onSearchHandler}
        value={props.searchVal}
      />
    </Dropdown>
  );
}

export default SearchDropDown;
