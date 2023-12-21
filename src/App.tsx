import { Game } from "./components/Game";
import { GameProvider } from "./contexts/GameContext";

function App() {
  return (
    <GameProvider>
      <Header />
      <Game />
    </GameProvider>
  );
}

const Header = () => {
  return (
    <header className="app-header">
      <h1>Craaaaab Game</h1>
    </header>
  );
};

export default App;
