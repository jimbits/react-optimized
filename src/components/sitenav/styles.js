import {css} from '@emotion/core'

const navbarStyles = css`
  padding: 1rem;
  box-shadow: 0 0 5px 0 #5f6369;
  background: #2d3952;
  color: #b4e2ea;
  font-weight: 700;
  color: #fff;
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    margin: 0 1rem;
    user-select: none;
  }
  a, a:visited, a:hover, a:active {
    color:white;
    text-decoration:none;
  } 
  a:hover{
    color:crimson;
  }
`;

export default navbarStyles