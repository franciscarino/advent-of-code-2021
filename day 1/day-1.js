"use strict";

function depthMeasurement(data) {
  let numIncreases = 0;

  for (let i = 0; i < data.length; i++) {
    const previous = data[i - 1];
    const current = data[i];

    if (current > previous) numIncreases++;
  }
  return numIncreases;
}



