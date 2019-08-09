/** @jsx jsx */
import {jsx} from "@emotion/core"
import React from "react"
import Counter from "./Counter";
import counterDisplayStyles from "./styles";
import { connect } from "react-redux";

 
 

 function CounterDisplay(props) {
   const counters = props.counters;
   
   
  return (
    <section css={counterDisplayStyles}>
     {
       props.counters.map((item, index)=> 
          <Counter key={item.id} index={index}/>
       )
     }  
    </section>
  );
}
const mapStateToProps = state =>{
  return {
    counters: state.counters
  }
}
 

export default connect(mapStateToProps)(CounterDisplay)