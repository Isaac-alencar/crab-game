import "../styles/game.css";

export function Game() {
  return (
    <div className="container">
      <canvas id="game-board" width={500} height={400}></canvas>
    </div>
  );
}
