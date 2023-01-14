export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export type svgJapanOptions = {
  element?: string;
  type: "full" | "dense" | "deform";
  stroked: boolean;
  strokeColor?: string;
  activeColor?: string;
  withTips: boolean;
  regionality: boolean;
  regions?: number[];
  uniformly: boolean;
  uniformColor?: string;
  prefColors?: { [key: string]: Color };
  width?: string;
  height?: string;
};

class svgJapan {
  opts: object;
  svg_atts: object;
  svg_data: object;
  regions: object;
  map_container: Node;
  curX: number;
  curY: number;
  svgJapanEvent: MouseEvent;

  constructor(options?: svgJapanOptions);
  init(): void;
  createMap(): Promise<void>;
  _drawMap(): Promise<SVGElement>;
  showTips(): void;
}

export default svgJapan;
// }
