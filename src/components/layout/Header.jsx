import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <>
      <header className="px-20 border-b bg-white flex items-center justify-between">
        <div className="pt-0 pb-5">
          <img src={logo} alt="oxigen" className="w-44" />
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
