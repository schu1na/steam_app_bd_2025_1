import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import * as S from "./styled";

export default function PlayerTagChart() {
  const [allData, setAllData] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/players/tag-playtime")
      .then((res) => {
        setAllData(res.data);
        // Extrai apelidos únicos para o select
        const uniquePlayers = [
          ...new Set(res.data.map((item) => item.apelido)),
        ];
        setPlayers(uniquePlayers);
        if (uniquePlayers.length > 0) {
          setSelectedPlayer(uniquePlayers[0]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedPlayer) {
      const filteredData = allData
        .filter((item) => item.apelido === selectedPlayer)
        .map((item) => ({
          name: item.tag_name,
          "Horas Jogadas": parseFloat(item.total_hours_tag_played.toFixed(2)),
        }));
      setChartData(filteredData);
    }
  }, [selectedPlayer, allData]);

  const handlePlayerChange = (event) => {
    setSelectedPlayer(event.target.value);
  };

  return (
    <S.Container>
      <S.BoxContainer>
      <h2 className="chart-title">Horas Jogadas por Tag</h2>
      <S.PlayerSelectContainer>
        <label htmlFor="player-select" className="player-select-label">
          Selecione um Jogador:
        </label>
        <select
          id="player-select"
          value={selectedPlayer}
          onChange={handlePlayerChange}
          className="player-select"
        >
          {players.map((player, index) => (
            <option key={index} value={player}>
              {player}
            </option>
          ))}
        </select>
      </S.PlayerSelectContainer>

      {chartData.length > 0 ? (
          <div
            style={{ width: '100%', padding: "32px", display: "flex", justifyContent: "center"}}
          >
            <ResponsiveContainer width="90%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 100 }}
                barCategoryGap="120%"
                barSize={50}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={80}
                />
                <YAxis
                  label={{ value: "Horas", angle: -90, position: "insideLeft" }}
                />
                <Tooltip formatter={(value) => `${value}h`} />
                <Legend />
                <Bar dataKey="Horas Jogadas" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
      ) : (
        <p className="no-data-message">
          Nenhum dado disponível para o jogador selecionado.
        </p>
      )}
      </S.BoxContainer>
    </S.Container>
  );
}
