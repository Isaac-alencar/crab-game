type PlayableArea = {
  width: number;
  height: number;
};

export class Crab {
  private context: CanvasRenderingContext2D | undefined;
  private posX: number = 250;
  private posY: number = 200;
  private width: number = 90;
  private height: number = 60;
  private playableArea: PlayableArea | undefined;

  setContext(ctx: CanvasRenderingContext2D): void {
    this.context = ctx;
  }

  setPlayableArea(playableArea: PlayableArea): void {
    this.playableArea = playableArea;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getPosX(): number {
    return this.posX;
  }

  setPosX(pos: number): void {
    if (!this.playableArea) return;

    if (pos < 0) {
      this.posX = 0;
      return;
    }

    if (pos > this.playableArea.width - this?.width) {
      this.posX = this.playableArea.width - this?.width;
      return;
    }

    this.posX = pos;
  }

  getPosY(): number {
    return this.posY;
  }

  setPosY(pos: number): void {
    if (!this.playableArea) return;

    if (pos < 0) {
      this.posY = 0;
      return;
    }

    if (pos > this.playableArea.height - this.height) {
      this.posY = this.playableArea.height - this.height;
      return;
    }

    this.posY = pos;
  }

  public move(x: number, y: number) {
    // if (this.detectCollision()) return null;

    this.setPosX(this.posX + this.width * x);
    this.setPosY(this.posY + this.height * y);
  }

  public draw() {
    if (!this.context) return;

    let crabX = this.posX + this.width - 60;
    let crabY = this.posY + this.height - 20;

    // "Belly"
    this.context.beginPath();
    this.context.rect(crabX, crabY, 30, 10);
    this.context.fillStyle = "#f26419";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(crabX - 10, crabY + 10, 10, 10);
    this.context.fillStyle = "#f26419";
    this.context.fill();
    this.context.closePath();

    // Bottom legs
    this.context.beginPath();
    this.context.rect(crabX + 30, crabY + 10, 10, 10);
    this.context.fillStyle = "#f26419";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(crabX - 20, crabY, 10, 10);
    this.context.fillStyle = "#f26419";
    this.context.fill();
    this.context.closePath();

    // Side legs
    this.context.beginPath();
    this.context.rect(crabX + 40, crabY, 10, 10);
    this.context.fillStyle = "#f26419";
    this.context.fill();
    this.context.closePath();

    // "Chest"
    this.context.beginPath();
    this.context.rect(crabX - 10, crabY - 20, 50, 20);
    this.context.fillStyle = "#f26419";
    this.context.fill();
    this.context.closePath();

    // "Head"
    this.context.beginPath();
    this.context.rect(crabX + 10, crabY - 30, 10, 10);
    this.context.fillStyle = "#f26419";
    this.context.fill();
    this.context.closePath();

    // "Eyes"
    this.context.beginPath();
    this.context.rect(crabX + 20, crabY - 30, 10, 10);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(crabX, crabY - 30, 10, 10);
    this.context.fillStyle = "#000";
    this.context.fill();
    this.context.closePath();

    // "Claws"
    this.context.beginPath();
    this.context.rect(crabX + 40, crabY - 40, 20, 20);
    this.context.fillStyle = "#f26419";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(crabX - 30, crabY - 40, 20, 20);
    this.context.fillStyle = "#f26419";
    this.context.fill();
    this.context.closePath();
  }
}
