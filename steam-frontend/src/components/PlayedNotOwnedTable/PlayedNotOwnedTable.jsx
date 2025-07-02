import { useEffect, useState } from "react";
import axios from "axios";
import* as S from "./styled";

export default function PlayedNotOwnedTable() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/games/played-not-owned")
      .then(res => setEntries(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <S.Container>
      <S.BoxContainer>
      <h2>Jogos Jogados Não Possuídos</h2>
      <table>
        <thead>
          <tr>
            <th>Jogador</th>
            <th>Jogo</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e, i) => (
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