import "./App.css";
import {
  Aboutme,
  ColorFondo,
  Contact,
  Footer,
  Header,
  Repositories,
  Skills,
  Welcome,
} from "./components";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <ColorFondo>
        <Header />
        <Welcome />
        <Aboutme />
        <Skills/>
        <Repositories />
        <Contact/>
        <Footer />
      </ColorFondo>
    </React.Fragment>
  );
}

export default App;
