import { useEffect, useRef } from "react";

import { useGame } from "../contexts/GameContext";

import "../styles/game.css";

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 400;
const GAME_SPEED = 1000 / 60;

export function Game() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { game } = useGame();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!context) return;

    const interval = setInterval(() => game(context), GAME_SPEED);

    return () => clearInterval(interval);
  }, [game]);

  return (
    <div className="container">
      <canvas
        ref={canvasRef}
        id="game-board"
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
      ></canvas>
    </div>
  );
}
