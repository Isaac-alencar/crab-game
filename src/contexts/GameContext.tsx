import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { Crab } from "../characters/Crab";
import { Food } from "../characters/Food";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../constants";
import { useKeyboardControl } from "../hooks/useKeyboardControl";

type GameContextProps = {
  game: (context: CanvasRenderingContext2D) => void;
  hitCounts: number;
};

export const GameContext = createContext<GameContextProps>(
  {} as GameContextProps
);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [hitCounts, setHitCounts] = useState<number>(0);

  let gameLevel = useRef(1);
  const crab = useRef(new Crab());
  const food = useRef(new Food());

  const { directionX, directionY } = useKeyboardControl();

  const detectCollision = (posX: number, posY: number) => {
    if (posX <= 0) {
      crab.current.setPosX(0);
      setHitCounts(0);
      gameLevel.current = 1;
      return;
    }

    if (posX > CANVAS_WIDTH - crab.current.getWidth()) {
      crab.current.setPosX(CANVAS_WIDTH - crab.current.getWidth());
      setHitCounts(0);
      gameLevel.current = 1;
      return;
    }

    if (posY < 0) {
      crab.current.setPosY(0);
      setHitCounts(0);
      gameLevel.current = 1;
      return;
    }

    if (posY > CANVAS_HEIGHT - crab.current.getHeight()) {
      crab.current.setPosY(CANVAS_HEIGHT - crab.current.getHeight());
      setHitCounts(0);
      gameLevel.current = 1;
      return;
    }

    crab.current.setPosY(posY);
    crab.current.setPosX(posX);
  };

  const game = useCallback(
    (context: CanvasRenderingContext2D) => {
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      crab.current.setContext(context);
      food.current.setContext(context);

      crab.current.draw();
      food.current.draw();

      crab.current.move(directionX, directionY, gameLevel.current);
      detectCollision(crab.current.getPosX, crab.current.getPosY);

      if (
        crab.current.cx - food.current.cx <= 46 &&
        crab.current.cx - food.current.cx >= -72 &&
        crab.current.cy - food.current.cy <= 55 &&
        crab.current.cy - food.current.cy >= -35
      ) {
        setHitCounts((prevValue) => prevValue + 1);
        gameLevel.current += gameLevel.current / 50;
        food.current = new Food();
      }
    },
    [directionX, directionY, gameLevel]
  );

  const value = useMemo(
    () => ({
      game,
      hitCounts,
    }),
    [game, hitCounts]
  );
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("Wrap you component with GameProvider!");
  }

  return context;
};
