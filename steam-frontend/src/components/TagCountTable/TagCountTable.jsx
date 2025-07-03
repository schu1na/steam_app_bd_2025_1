import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled";

// 1. Importações da biblioteca de gráficos
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// 2. Registro dos componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TagCountTable() {
  // Estado para armazenar TODAS as tags recebidas da API
  const [allTags, setAllTags] = useState([]);
  // Estado para controlar o número de tags a serem exibidas (Top N)
  const [topN, setTopN] = useState(10);
  // Estado para formatar os dados para o gráfico
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  
  // Efeito para buscar os dados da API
  useEffect(() => {
    axios.get("http://localhost:8000/tags/counts")
      .then(res => {
        // Ordena os dados em ordem decrescente assim que são recebidos
        const sortedTags = res.data.sort((a, b) => b.total_jogos - a.total_jogos);
        setAllTags(sortedTags);
      })
      .catch(err => console.error(err));
  }, []);

  // Efeito para atualizar o gráfico quando `allTags` ou `topN` mudam
  useEffect(() => {
    // Garante que temos dados antes de tentar processá-los
    if (allTags.length === 0) return;

    // Seleciona o "top N" ou todas as tags
    const tagsToShow = topN === 'all' ? allTags : allTags.slice(0, topN);

    // Formata os dados para o formato que o Chart.js espera
    setChartData({
      labels: tagsToShow.map(tag => tag.tag_name), // Eixo Y (vertical)
      datasets: [
        {
          label: 'Total de Jogos',
          data: tagsToShow.map(tag => tag.total_jogos), // Eixo X (horizontal)
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    });
  }, [allTags, topN]); // Roda este efeito quando allTags ou topN mudam

  // Efeito para atualizar o gráfico quando `allTags` ou `topN` mudam
  useEffect(() => {
    // Garante que temos dados antes de tentar processá-los
    if (allTags.length === 0) return;

    // Seleciona o "top N" ou todas as tags
    const tagsToShow = topN === 'all' ? allTags : allTags.slice(0, topN);

    // Formata os dados para o formato que o Chart.js espera
    setChartData({
      labels: tagsToShow.map(tag => tag.tag_name), // Eixo Y (vertical)
      datasets: [
        {
          label: 'Total de Jogos',
          data: tagsToShow.map(tag => tag.total_jogos), // Eixo X (horizontal)
          backgroundColor: '#8884d8',
          borderColor: '#8884d8',
          borderWidth: 1,
        },
      ],
    });
  }, [allTags, topN]); // Roda este efeito quando allTags ou topN mudam

  // Opções de configuração para o gráfico
  const options = {
    indexAxis: 'y', // ESSENCIAL: Isso torna o gráfico de barras horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Opcional: esconde a legenda 'Total de Jogos'
      },
      title: {
        display: true,
        text: `Top ${topN === 'all' ? allTags.length : topN} Tags com Mais Jogos`,
        font: {
          size: 18
        }
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total de Jogos'
        }
      },
      y: {
        ticks: {
          autoSkip: false, // Garante que todas as tags sejam mostradas no eixo Y
          font: {
            size: 16 // Tamanho da fonte para as tags no eixo Y
          },
        }
      }
    }
  };

  return (
    <S.Container>
      <S.BoxContainer>
        <h2>Tags e Número de Jogos</h2>
        
        {/* Seletor de Top N */}
        <S.ControlsContainer>
          <label htmlFor="topN-select">Mostrar Top: </label>
          <select 
            id="topN-select"
            value={topN} 
            onChange={(e) => setTopN(e.target.value === 'all' ? 'all' : Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={'all'}>Todas</option>
          </select>
        </S.ControlsContainer>

        {/* Container para o gráfico para controlar a altura */}
        <S.ChartWrapper>
          {chartData.labels.length > 0 ? (
            <Bar options={options} data={chartData} />
          ) : (
            <p>Carregando dados do gráfico...</p>
          )}
        </S.ChartWrapper>

      </S.BoxContainer>
    </S.Container>
  );
}