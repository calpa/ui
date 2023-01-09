import { svgJapanOptions } from "../../types/svg-japan/src/_core-class";

export type JapanMapProps = svgJapanOptions & {
  onClick: (event: Event) => void;
};
