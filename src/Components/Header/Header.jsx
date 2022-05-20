import { useState } from "react";
import { Wrapper } from "./Header.styles";
import Logo from "../../Images/logo.svg";
import Hamburger from "../../Images/icon-menu.svg";
import DownCaret from "../../Images/icon-arrow-down.svg";
import Todo from "../../Images/icon-todo.svg";
import Reminder from "../../Images/icon-reminders.svg";
import Calender from "../../Images/icon-calendar.svg";
import Plan from "../../Images/icon-planning.svg";
import Close from "../../Images/icon-close-menu.svg";
import { useWindowWidth } from "../../Hooks/useWindowWidth";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState({
    Features: false,
    Company: false,
  });

  const ToggleDropdown = (value) => {
    setIsDropDownOpen((prev) => {
      return { ...prev, [value]: !prev[value] };
    });
  };

  const isVisible = useWindowWidth() >= 768 ? true : false;

  return (
    <Wrapper className="header grid">
      <div className="header__section">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <div
          className={
            sidebarVisible && !isVisible
              ? "nav__wrapper nav__wrapper-open"
              : "nav__wrapper nav__wrapper-close"
          }
        >
          <nav
            className={sidebarVisible && !isVisible ? "nav nav__open" : "nav"}
          >
            <div
              className="close__btn"
              onClick={() => {
                setSidebarVisible(false);
              }}
            >
              <img src={Close} alt="times" />
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="/"
                  className="nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    ToggleDropdown("Features");
                  }}
                >
                  Features
                  <div
                    className={
                      isDropDownOpen.Features
                        ? "features__open nav__icon"
                        : "nav__icon"
                    }
                  >
                    <img src={DownCaret} alt="down caret" />
                  </div>
                </a>

                <ul
                  className={
                    isDropDownOpen.Features
                      ? "features__list features__open left"
                      : "features__list features__close"
                  }
                >
                  <li className="feature__item">
                    <div className="feature__icon">
                      <img src={Todo} alt="notebook" />
                    </div>
                    <a href="/">Todo List</a>
                  </li>
                  <li className="feature__item">
                    <div className="feature__icon">
                      <img src={Calender} alt="notebook" />
                    </div>
                    <a href="/">Calender</a>
                  </li>
                  <li className="feature__item">
                    <div className="feature__icon">
                      <img src={Reminder} alt="notebook" />
                    </div>
                    <a href="/">Reminders</a>
                  </li>
                  <li className="feature__item">
                    <div className="feature__icon">
                      <img src={Plan} alt="notebook" />
                    </div>
                    <a href="/">Planning</a>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <a
                  href="/"
                  className="nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    ToggleDropdown("Company");
                  }}
                >
                  Company
                  <div
                    className={
                      isDropDownOpen.Company
                        ? "features__open nav__icon"
                        : "nav__icon"
                    }
                  >
                    <img src={DownCaret} alt="down caret" />
                  </div>
                </a>
                <ul
                  className={
                    isDropDownOpen.Company
                      ? "features__list features__open"
                      : "features__list features__close"
                  }
                >
                  <li className="feature__item">
                    <a href="/">History</a>
                  </li>
                  <li className="feature__item">
                    <a href="/">Our Team</a>
                  </li>
                  <li className="feature__item">
                    <a href="/">Blog</a>
                  </li>
                </ul>
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
            <ul className="signup__list">
              <li className="signup__item">
                <a href="/">Login</a>
              </li>
              <li className="signup__item">
                <button className="btn-register">Register</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {!isVisible && (
        <img
          src={Hamburger}
          alt="hamburger"
          className="hamburger"
          onClick={() => {
            setSidebarVisible(true);
          }}
        />
      )}
    </Wrapper>
  );
};

export default Header;
