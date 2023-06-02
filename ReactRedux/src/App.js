import { useState } from "react";
import FormDate from "./components/FormDate";
import Photos from "./components/Photos";
import Filter from "./components/Filter";
import Products from "./components/Products";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Filter />
      <Products />
      <FormDate />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Photos />}
    </>
  );
}

export default App;
