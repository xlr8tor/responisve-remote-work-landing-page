import styled from "styled-components";

export const Wrapper = styled.header`
  &.header {
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .header__section {
    display: flex;
  }
  .nav__list {
    display: flex;
    gap: 3rem;
  }

  .hamburger {
    align-self: flex-start;
  }
`;
