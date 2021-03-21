import { StarFilled } from "@ant-design/icons";

function Header() {
  return (
    <p className="header">
      <StarFilled className="green-icon" />
      <span className="italic-bold">TopRamen</span>
      <StarFilled className="green-icon" />
    </p>
  );
}

export default Header;
