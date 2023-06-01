import { useState } from "react";

function App() {
  const [partida, setPartida] = useState("");
  const [retorno, setRetorno] = useState("");

  return (
    <>
      <form>
        <p>
          <label htmlFor="partida">Partida</label>
          <input
            type="date"
            id="partida"
            value={partida}
            onChange={(target) => setPartida(target.value)}
          />
        </p>

        <p>
          <label htmlFor="retorno">Retorno</label>
          <input type="date" id="retorno" />
        </p>
      </form>
    </>
  );
}

export default App;
