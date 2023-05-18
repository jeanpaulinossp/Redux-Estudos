import store from "./store/configureStore.js";
import {
  incrementarTempo,
  reduzirTempo,
  modificarEmail,
} from "./store/aluno.js";
import { completarAula, completarCurso, resetarCurso } from "./store/aulas.js";

function render() {
  const { aulas, aluno } = store.getState();
  const aulasEl = document.getElementById("aulas");
  const alunoEl = document.getElementById("aluno");

  alunoEl.innerText = `${aluno.nome} : ${aluno.email} : ${aluno.diasRestantes}`;
  aulasEl.innerText = aulas.filter((item) => item.completa === true).length;
}

render();
store.subscribe(render);

store.dispatch(incrementarTempo());
store.dispatch(reduzirTempo());
store.dispatch(modificarEmail("jean.ssparaiso@gmail.com"));
store.dispatch(completarAula(4));
store.dispatch(resetarCurso());
store.dispatch(completarCurso());
