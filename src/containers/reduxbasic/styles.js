import { css } from "@emotion/core";

const counterDisplayStyles = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .counter {
    background: #2d3952;
    display: inline-block;
    padding: 1.5rem;
    text-align: center;
    border-radius: 6px;
    margin-bottom: 1rem;
    color: white;
    min-width: calc(100% - 1rem);
  }
  .counter-heading {
    font-size: 1.5rem;
  }
  .counter-display {
    font-size: 4rem;
    line-height: 3rem;
    margin: 1.5rem 0;
  }
  button {
    font-size: 1 rem;
    padding: 0.5rem 1.5rem;
    border: none;
    margin: 0.25rem;
    border-radius: 5px;
    background:#fff;
  }
  .counter-id {
    padding: 1rem;
    font-size: 10px;
    display: flex;
    p {
      margin: 0 0.5rem;
    }
    justify-content: center;
    span {
      display: block;
    }
  }
  @media (min-width: 420px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 780px;
    margin: auto;
    .counter {
      min-width: calc(50% - 0.5rem);
    }
  }

  @media (min-width: 720px) {
    .counter {
      min-width: calc(33% - 1rem);
      flex-grow: 1;
      margin: 0 0.5rem 1rem;
    }
  }
  @media (min-width: 840px) {
    max-width: 1200px;
    .counter {
      min-width: calc(25% - 1rem);
    }
  }
`;

export default counterDisplayStyles;
