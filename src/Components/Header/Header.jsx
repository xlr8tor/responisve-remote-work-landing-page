import { Wrapper } from "./Header.styles";
import Logo from "../../Images/logo.svg";
import Hamburger from "../../Images/icon-menu.svg";
import { useWindowWidth } from "../../Hooks/useWindowWidth";

const Header = () => {
  const isVisible = useWindowWidth() >= 728 ? true : false;
  return (
    <Wrapper className="header grid">
      <div className="header__section">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        {isVisible && (
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  {" "}
                  Features
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Company
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Careers
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  About
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {isVisible ? (
        <div>
          <a href="/">Login</a>
          <button>Register</button>
        </div>
      ) : (
        <img src={Hamburger} alt="hamburger" className="hamburger" />
      )}
    </Wrapper>
  );
};

export default Header;
