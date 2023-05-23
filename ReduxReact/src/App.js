import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador";
import { abrir, fechar } from "./store/modal";

function App() {
  const { contador, modal } = useSelector((state) => state); // usado assim quando usado o CombineReducers
  const dispatch = useDispatch();
  return (
    <>
      {modal && (
        <>
          <h1>Total: {contador}</h1>
          <button onClick={() => dispatch(incrementar())}>Incrementar</button>
          <button onClick={() => dispatch(reduzir())}>Reduzir</button>
          <button onClick={() => dispatch(fechar())}>Fechar Modal</button>
        </>
      )}

      <button onClick={() => dispatch(abrir())}>Abrir Modal</button>
    </>
  );
}

export default App;
