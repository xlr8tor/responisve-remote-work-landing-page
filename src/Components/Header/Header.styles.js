import styled from "styled-components";

export const Wrapper = styled.header`
  &.header {
    position: relative;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .header__section {
    display: flex;
  }

  .nav__wrapper {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .nav__wrapper-close {
    height: 0;
  }

  .nav {
    background-color: #fff;
    height: inherit;
    float: right;
    z-index: 10;
    padding: 1.5rem;
    width: 60%;
    transform: translateX(300px);
    transition: transform 0.5s;
  }

  .nav.nav__open {
    transform: translateX(0);
  }

  .nav__list {
    margin-top: var(--mb-2-5);
    gap: 3rem;
  }

  .nav__item {
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: var(--mb-1-5);
  }

  .nav__link {
    display: inline-flex;
    align-items: center;
    /* margin-bottom: var(--mb-1-5); */
  }

  .nav__icon {
    flex-shrink: 0;
    margin-left: var(--mb-1);
    transition: 0.4s;
  }

  .hamburger {
    align-self: flex-start;
  }

  .features__list {
    margin-left: var(--mb-1-5);
  }

  .feature__icon {
    margin-right: var(--mb-1);
  }

  .feature__item {
    display: flex;
    align-items: center;
  }

  .feature__item:first-child,
  .feature__item:nth-child(2) {
    margin-top: var(--mb-1-5);
  }

  .feature__item:not(:last-child) {
    margin-bottom: var(--mb-1);
  }

  .signup__item {
    text-align: center;
    margin-bottom: var(--mb-1);
  }

  .btn-register {
    width: 100%;
    font-size: inherit;
    color: var(--text-color);
    padding: 0.75rem 0;
  }

  .btn-register:hover {
    color: var(--boder-hover-color);
  }

  .close__btn {
    position: absolute;
    right: 1.4rem;
  }

  .features__close {
    display: none;
    overflow: hidden;
  }

  .features__open .features__list {
    height: max-content;
    margin-bottom: var(--mb-2-5);
  }

  .features__open.nav__icon {
    transform: rotate(-180deg);
  }

  @media (min-width: 768px) {
    &.header {
      grid-auto-flow: row;
      align-items: center;
      justify-content: initial;
      max-width: 1440px;
      padding: 1rem 2rem;
      margin: auto;
    }

    .nav__wrapper {
      position: initial;
      height: inherit;
      width: inherit;
      overflow: visible;
      background-color: transparent;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background-color: transparent;
      padding: 0;
      transform: translateX(0px);
      transition: none;
    }

    .header__section {
      width: 100%;
      align-items: center;
    }

    .nav__list {
      display: flex;
      margin: 0;
      padding-left: 2rem;
      gap: 2rem;
    }

    .nav__item {
      display: block;
      margin: 0;
    }

    .nav__icon {
      margin-left: var(--mb-0-5);
    }

    .features__list {
      position: absolute;
      background-color: #fff;
      margin-left: 0;
      border-radius: 0.5rem;
      overflow: hidden;
      padding: 1rem;
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.21);
      -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.21);
      -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.21);
      top: 50px;
    }

    .left {
      left: -10px;
    }

    .feature__item:first-child,
    .feature__item:nth-child(2) {
      margin-top: 0;
    }

    .signup__list {
      display: flex;
      align-items: center;
    }

    .signup__item {
      margin-bottom: 0;
    }

    .signup__item:first-child {
      margin-right: 2rem;
    }

    .btn-register {
      width: 100%;
      padding: 0.5rem 1rem;
    }

    .close__btn {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .nav__list {
      padding-left: 3rem;
    }
  }
`;
