import "./App.css";
import { results } from "./results";

const palette = [
  "#f393a0",
  "#ffa2a5",
  "#ff9e95",
  "#ff9b82",
  "#ff9a6c",
  "#ff9c53",
  "#ffa036",
  "#ffa600",
];

const moonPalette = [
  "#004c6d",
  "#006083",
  "#007599",
  "#008bad",
  "#00a1c1",
  "#00b8d3",
  "#00cfe3",
  "#00e7f2",
  "#00ffff",
];

async function initMap() {
  const { spherical } = await google.maps.importLibrary("geometry");

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 52.23785981969956, lng: 20.974093480382102 },
    mapTypeId: "terrain",
    mapId: "DEMO_MAP_ID",
  });

  const context = { map, spherical };
  results.forEach((result, i) =>
    addALP(
      context,
      (result.type == "moon" ? moonPalette : palette)[i % palette.length],
      result
    )
  );
}

// @ts-expect-error GOGO
window.initMap = initMap;

function addALP(
  { spherical, map }: { spherical: any; map: any },
  color: string,
  {
    dh,
    zn,
    assumed,
    expected,
  }: {
    dh: number;
    zn: number;
    assumed: { lat: number; lng: number };
    expected: number;
  }
) {
  const alpPoint = spherical.computeOffset(assumed, dh * 1852, zn);
  const alp = [
    spherical.computeOffset(alpPoint, 2000000, zn - 90),
    spherical.computeOffset(alpPoint, 2000000, zn + 90),
  ];
  new google.maps.Polyline({
    map,
    path: alp,
    geodesic: true,
    strokeColor: color,
    strokeWeight: 2,
  });

  const expectedAlpPoint = spherical.computeOffset(
    assumed,
    expected * 1852,
    zn
  );
  const expectedAlp = [
    spherical.computeOffset(expectedAlpPoint, 2000000, zn - 90),
    spherical.computeOffset(expectedAlpPoint, 2000000, zn + 90),
  ];
  new google.maps.Polygon({
    map,
    geodesic: true,
    strokeWeight: 0,
    fillColor: color,
    fillOpacity: 0.35,
    paths: [alp[0], alp[1], expectedAlp[1], expectedAlp[0]],
  });
}

function App() {
  return <div id="map" />;
}

export default App;
