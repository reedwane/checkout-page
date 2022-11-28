import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";

const Navbar = () => {
  let iconSize = 30;
  return (
    <nav className="navbar content">
      <ul>
        <li className="flex-start">
          <BsCheckCircleFill size={iconSize} />
          <div className="info flex-btw">
            <span>FIRST STEP</span>
            <p>Information</p>
          </div>
        </li>
        <li className="flex-start">
          <BsCheckCircleFill size={iconSize} />
          <div className="info flex-btw">
            <span>SECOND STEP</span>
            <p>Delivery</p>
          </div>
        </li>
        <li className="flex-start">
          <BsCheckCircleFill size={iconSize} />
          <div className="info flex-btw">
            <span>THIRD STEP</span>
            <p>Billing</p>
          </div>
        </li>
        <li className="flex-start">
          <AiFillDollarCircle size={iconSize} />
          <div className="info  flex-btw">
            <span>FOURTH STEP</span>
            <p>Payment</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
