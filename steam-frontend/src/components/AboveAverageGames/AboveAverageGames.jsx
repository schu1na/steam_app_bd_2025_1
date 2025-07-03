import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled";

export default function AboveAverageGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/games/above-average-positive")
      .then(res => setGames(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <S.Container>
      <S.AverageContainer>
        <h2>Jogos com Preço Abaixo da Média e com Reviews Positivas:</h2>
        <S.GamesWrapper>
          {games.map((g, i) => (
            <S.GameTag key={i}>{g.name}</S.GameTag>
          ))}
        </S.GamesWrapper>
      </S.AverageContainer>
    </S.Container>
  );
}
