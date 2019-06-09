import React, { Component } from "react";
import ThreeComp from "./Three";
import Test from "./Test";
import Particles from "./Particles";
import StarrySky from "./StarrySky";
import BillBoards from "./Billboards";
class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'red' }}>
        {/* <ThreeComp /> */}
        {/* <Test /> */}
        {/* <Particles /> */}
        {/* <StarrySky /> */}
        <BillBoards />
      </div>
    );
  }
}
export default App;