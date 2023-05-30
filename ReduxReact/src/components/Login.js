import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/login";
import styles from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  const { data } = useSelector((state) => state.login.user);

  return (
    <form onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="username">
        Usuário
      </label>
      <input
        className={styles.input}
        id="username"
        type="text"
        value={username}
        onChange={({ target }) => setUserName(target.value)}
      />
      <label className={styles.label} htmlFor="password">
        Senha
      </label>
      <input
        className={styles.input}
        id="password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button className={styles.button}>Enviar</button>
      <p>{data?.email}</p>
    </form>
  );
};

export default Login;
