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
  prefColors?: { [key: string]: string };
  width?: string;
  height?: string;
};

declare module "svg-japan/src/_core-class" {
  import svgJapan from "svg-japan/src/_core-class";

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
    _bindEvents(): void;
    _createSVG(): SVGElement;
    _createDefs(): SVGDefsElement;
    _createFilter(): SVGFilterElement;
    _createLinearGradient(): SVGLinearGradientElement;
    _createPath(
      id: string,
      d: string,
      region: number,
      def: string
    ): SVGPathElement;
    _createText(id: string, x: number, y: number, t: string): SVGTextElement;
    _createUse(
      id: string,
      ref: string,
      x: number,
      y: number,
      width: number,
      height: number
    ): SVGUseElement;
    _createGroup(id: string, region: number): SVGGElement;
    _createTips(): HTMLDivElement;
    _setCoords(evt: MouseEvent): void;
    _setTips(x: number, y: number, title: string): void;
    _setActive(id: string): void;
    _resetActive(): void;
    _resetCoords(): void;
    _resetTips(): void;
    _resetAll(): void;
    showTips(): void;
    hideTips(): void;
    reset(): void;
    setColor(id: string | number, color: string): void;
    setColors(colors: object): void;
    getColors(): object;
    setOpacity(id: string | number, opacity: number): void;
    setOpacities(opacities: object): void;
    getOpacities(): object;
    setRegionColors(region: number, color: string): void;
    setRegionOpacities(region: number, opacity: number): void;
  }

  export default svgJapan;
}
