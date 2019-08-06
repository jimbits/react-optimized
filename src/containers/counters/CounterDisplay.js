/** @jsx jsx */
import {jsx} from "@emotion/core"
 
import Counter from "./Counter";
import counterDisplayStyles from "./styles";
import uuidV4 from "uuid/v4";
export default function CounterDisplay(props) {
  console.log(uuidV4())
  return (
    <section css={counterDisplayStyles}>
      <Counter/>
    </section>
  );
}
