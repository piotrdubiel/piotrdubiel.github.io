import { toDecimal } from "./utils";

export const results = [
  {
    dh: -173,
    expected: 0,
    zn: 245.5,
    assumed: { lat: 52, lng: toDecimal(21, 30.4) },
    type: "moon",
  },
  {
    dh: -12,
    expected: -11.84,
    zn: 256,
    assumed: { lat: 52, lng: toDecimal(21, 1.3) },
    type: "moon",
  },
  // {
  //   dh: -18,
  //   expected: -19.93,
  //   zn: 212.5,
  //   assumed: { lat: 52, lng: toDecimal(20, 34.6) },
  //   type: "sun",
  // },
  // {
  //   dh: -24,
  //   expected: -21.1,
  //   zn: 227.2,
  //   assumed: { lat: 52, lng: toDecimal(20, 33.3) },
  //   type: "sun",
  // },
  // {
  //   dh: -9,
  //   expected: -12.8,
  //   zn: 93,
  //   assumed: { lat: 52, lng: toDecimal(21, 18) },
  //   type: "moon",
  // },
  // {
  //   dh: -14,
  //   expected: -16.35,
  //   zn: 217.5,
  //   assumed: { lat: 52, lng: toDecimal(20, 45.1) },
  //   type: "moon",
  // },
  // {
  //   dh: -12,
  //   expected: -18.06,
  //   zn: 211,
  //   assumed: { lat: 52, lng: toDecimal(20, 40.1) },
  //   type: "sun",
  // },
  // {
  //   dh: -8,
  //   expected: -10.56,
  //   zn: 283.2,
  //   assumed: { lat: 52, lng: toDecimal(20, 35.4) },
  //   type: "moon",
  // },
  // {
  //   dh: -9,
  //   expected: -10.74,
  //   zn: 204.7,
  //   assumed: { lat: 52, lng: toDecimal(21, 7.3) },
  //   type: "sun",
  // },
];
