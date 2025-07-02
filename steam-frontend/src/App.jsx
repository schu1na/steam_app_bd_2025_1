import TagCountTable from './components/TagCountTable/TagCountTable'
import PlayerTagChart from './components/PlayerTagChart/PlayerTagChart'
import ReviewList from './components/ReviewList/ReviewList'
import PlayedNotOwnedTable from './components/PlayedNotOwnedTable/PlayedNotOwnedTable'
import AboveAverageGames from './components/AboveAverageGames/AboveAverageGames'
import './App.css'

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Steam Dashboard</h1>
      <TagCountTable />
      <PlayerTagChart />
      <ReviewList />
      <PlayedNotOwnedTable />
      <AboveAverageGames />
    </div>
  )
}

export default App

