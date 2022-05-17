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

  .nav {
    position: absolute;
    background-color: #fff;
    top: 0;
    right: 0;
    z-index: 10;
    min-height: 100vh;
    padding: 1.5rem;
    width: 60%;
  }

  .nav__list {
    margin-top: var(--mb-2-5);
    /* display: flex; */
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

  .close__btn {
    position: absolute;
    right: 1.4rem;
  }

  .features__close {
    height: 0;
    overflow: hidden;
  }

  .features__open .features__list {
    height: max-content;
    margin-bottom: var(--mb-2-5);
  }

  .features__open.nav__icon {
    transform: rotate(-180deg);
  }
`;
