import styled from "styled-components";

export const Wrapper = styled.main`
  &.main {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }

  .main__image {
    display: block;
    width: fit-content;
  }

  .hero__image {
    height: inherit;
    max-height: 600px;
  }

  .main__content {
    text-align: center;
  }

  .title {
    font-size: var(--big-font-size);
    line-height: 1;
    margin-top: var(--mb-1);
    margin-bottom: var(--mb-1);
  }

  .description {
    color: var(--text-color);
    font-weight: var(--font-size-medium);
    margin-bottom: var(--mb-1-5);
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-cta {
    background-color: var(--boder-hover-color);
    color: var(--body-color);
    font-size: inherit;
    font-weight: var(--font-size-bold);
    margin-bottom: var(--mb-2-5);
    transition: 0.3s;
  }

  .btn-cta:hover {
    color: var(--boder-hover-color);
    background-color: transparent;
  }

  .sponsors {
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    max-width: 400px;
  }

  @media (min-width: 728px) {
    &.main {
      grid-auto-flow: column;
      align-items: flex-end;
    }

    .main__content {
      text-align: left;
    }

    .main__image {
      order: 1;
    }

    .title {
      margin-bottom: var(--mb-3);
    }

    .title__span {
      display: block;
    }

    .description {
      margin-bottom: var(--mb-3);
      margin-left: 0;
    }

    .btn-cta {
      margin-bottom: 5rem;
    }
  }
`;
