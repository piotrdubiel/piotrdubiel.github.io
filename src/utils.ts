export const toDecimal = (deg: number, min = 0, sec = 0) =>
  deg + min / 60 + sec / 3600;

export const toRadians = (degrees: number) => degrees * (Math.PI / 180);

export const distance = (deg: number, min = 0) =>
  90 * 60 * 1852 - (deg * 60 + min) * 1852;

export const hc = ({
  declination,
  latitude,
  lha,
}: {
  declination: number;
  latitude: number;
  lha: number;
}) =>
  Math.asin(
    Math.sin(declination) * Math.sin(latitude) +
      Math.cos(latitude) * Math.cos(declination) * Math.cos(lha)
  );
