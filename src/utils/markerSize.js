const markerSize = data => {
  return data >= 50000
    ? 50
    : data < 50000 && data >= 10000
    ? 32
    : data < 10000 && data >= 1000
    ? 24
    : data < 1000 && data >= 100
    ? 16
    : 9;
};

export default markerSize;
