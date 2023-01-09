import { useEffect, useRef } from "react";

import svgJapan from "svg-japan/src/_core-class";
// import svgJapan, { svgJapanOptions } from "svg-japan/src/_core-class";
import { JapanMapProps } from "./JapanMap";
import "./index.css";

function JapanMap(props: JapanMapProps) {
  const { onClick } = props;

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new svgJapan(props);
    mapRef.current?.replaceChildren(map.map_container);
    mapRef.current?.addEventListener("svgmap.click", onClick);
  }, [mapRef, props]);

  return <div ref={mapRef} />;
}

export default JapanMap;
