import random from "lodash.random";

export class Food {
  private _width: number = 30;
  private _height: number = 30;
  private _foodX: number = random(10, 490);
  private _foodY: number = random(10, 370);
  public cx: number = this.foodX + this.width / 2;
  public cy: number = this.foodY + this.height / 2;

  private context: CanvasRenderingContext2D | undefined;

  public get width(): number {
    return this._width;
  }

  public set width(value: number) {
    this._width = value;
  }

  public get height(): number {
    return this._height;
  }

  public set height(value: number) {
    this._height = value;
  }

  public get foodX(): number {
    return this._foodX;
  }

  public set foodX(value: number) {
    this._foodX = value;
  }

  public get foodY(): number {
    return this._foodY;
  }

  public set foodY(value: number) {
    this._foodY = value;
  }

  setContext(ctx: CanvasRenderingContext2D) {
    this.context = ctx;
  }

  public draw(): void {
    if (!this.context) return;

    this.context.beginPath();
    this.context.rect(this.foodX, this.foodY, this.height, this.width);
    this.context.fillStyle = "#2a9d8f";
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.rect(this.cx, this.cy, 3, 3);
    // this.context.fillStyle = "red";
    this.context.fill();
    this.context.closePath();
  }
}
