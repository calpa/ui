import { useEffect, useRef } from "react";

import svgJapan, { svgJapanOptions } from "svg-japan/src/_core-class";

function JapanMap(props: svgJapanOptions) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new svgJapan(props);
    mapRef.current?.replaceChildren(map.map_container);
  }, [mapRef, props]);

  return <div ref={mapRef} />;
}

export default JapanMap;