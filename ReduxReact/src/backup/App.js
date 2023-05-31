import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoLogin } from "./store/login";
import Header from "./components/Header/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
