import "./App.css";
import { Fragment } from "react";
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

function App() {
  return (
    <Fragment>
      <ColorFondo>
        <Header />
        <Welcome />
        <Aboutme />
        <Skills/>
        <Repositories />
        <Contact/>
        <Footer />
      </ColorFondo>
    </Fragment>
  );
}

export default App;
