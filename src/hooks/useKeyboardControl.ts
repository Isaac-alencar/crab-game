import { useEffect, useState } from "react";

export const useKeyboardControl = () => {
  const [directionX, setDirectionX] = useState<number>(0);
  const [directionY, setDirectionY] = useState<number>(0);

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);

    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  const onKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp": {
        setDirectionX(0);
        setDirectionY(-1);
        return;
      }
      case "ArrowRight": {
        setDirectionX(1);
        setDirectionY(0);
        return;
      }
      case "ArrowDown": {
        setDirectionX(0);
        setDirectionY(1);
        return;
      }
      case "ArrowLeft": {
        setDirectionX(-1);
        setDirectionY(0);
        return;
      }
    }
  };

  return {
    directionX,
    directionY,
  };
};
