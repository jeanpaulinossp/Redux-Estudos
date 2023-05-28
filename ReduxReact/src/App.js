import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir, somar } from "./store/contador";
import { abrir, fechar } from "./store/modal";
import { useEffect, useState } from "react";
import { autoLogin, login } from "./store/login";

function App() {
  const { contador, modal } = useSelector((state) => state); // usado assim quando usado o CombineReducers
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  const { data } = useSelector((state) => state.login.user);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block" }} htmlFor="username">
          Usuário
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={({ target }) => setUserName(target.value)}
        />
        <label style={{ display: "block" }} htmlFor="password">
          Senha
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enviar</button>
        <p>{data?.email}</p>
      </form>
      {modal && (
        <>
          <h1>Total: {contador}</h1>
          <button onClick={() => dispatch(incrementar())}>Incrementar</button>
          <button onClick={() => dispatch(reduzir())}>Reduzir</button>
          <button onClick={() => dispatch(fechar())}>Fechar Modal</button>
          <button onClick={() => dispatch(somar(5))}>Somar 5</button>
        </>
      )}

      <button onClick={() => dispatch(abrir())}>Abrir Modal</button>
    </>
  );
}

export default App;
