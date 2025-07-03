import { useEffect, useState } from "react";
import axios from "axios";
import* as S from "./styled";

export default function PlayedNotOwnedTable() {
  const [entries, setEntries] = useState([]);
  const [selectedNickname, setSelectedNickname] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/games/played-not-owned")
      .then(res => setEntries(res.data))
      .catch(err => console.error(err));
  }, []);

  const nicknames = [...new Set(entries.map(e => e.apelido))];

  const filteredEntries = selectedNickname
    ? entries.filter(e => e.apelido === selectedNickname)
    : entries;

  return (
    <S.Container>
      <S.BoxContainer>
        <h2>Jogos Jogados Não Possuídos</h2>
        <S.PlayerSelectContainer>
          <label htmlFor="nickname-filter">Filtrar por Apelido: </label>
          <select
            id="nickname-filter"
            value={selectedNickname}
            onChange={(e) => setSelectedNickname(e.target.value)}
          >
            <option value="">Todos</option>
            {nicknames.sort().map((nickname, i) => (
              <option key={i} value={nickname}>
                {nickname}
              </option>
            ))}
          </select>
        </S.PlayerSelectContainer>
        <table>
          <thead>
            <tr>
              <th>Jogador</th>
              <th>Jogo</th>
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((e, i) => (
              <tr key={i}>
                <td>{e.apelido}</td>
                <td>{e.game_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.BoxContainer>
    </S.Container>
  );
}