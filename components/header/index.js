import { BsArrowLeft } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  let iconSize = 20;
  return (
    <header className="flex-btw content header">
      <BsArrowLeft size={iconSize} />
      <h2>ShareBenfts</h2>
      <FaShoppingBag size={iconSize} />
    </header>
  );
};

export default Header;
