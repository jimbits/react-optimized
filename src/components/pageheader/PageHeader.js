/** @jsx jsx */
import {jsx} from "@emotion/core"
import pageHeaderStyles from "./styles";
 

function PageHeader ({title, tagline}){
    return (
      <header css={pageHeaderStyles}>
        <p>{tagline}</p>
        <h1>{title}</h1>
      </header>
    );

}
export default PageHeader