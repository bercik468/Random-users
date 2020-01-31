import React from "react";
import Greeting from "./Greeting";
import Loading from "./Loading";
import BackToTop from "./BackToTop";
import RandomUsers from "./RandomUsers";

function App() {
  return (
    <div>
      <RandomUsers />
      <BackToTop />
      {/* <Greeting /> */}
      {/* <Loading /> */}
    </div>
  );
}

export default App;
