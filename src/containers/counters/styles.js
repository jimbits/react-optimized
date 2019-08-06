import { css } from "@emotion/core";

const counterDisplayStyles = css`
  .counter {
    background: #2d3952;
    display: inline-block;
    padding: 1.5rem;
    text-align: center;
    border-radius: 6px;
    margin: 1rem;
    color: white;
    min-width: calc(100% - 2rem)
  }
  .counter-heading {
    font-size: 1.5rem;
  }
  .counter-display {
    font-size: 4rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    margin: 0.25rem;
    border-radius: 5px;
  }
  .counter-id {
    font-size: 12px;
    display:flex;
    justify-content:space-between;
    span{display:block;} 
  }
`;

export default counterDisplayStyles;
