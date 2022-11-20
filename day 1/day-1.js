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


//Part 2
function countIncreases(array) {
  let numIncreases = 0;

  for (let i = 3; i < array.length; i++) {
    let current = array[i - 2] + array[i - 1] + array[i];
    let previous = array[i - 3] + array[i - 2] + array[i - 1];

    if (current > previous) numIncreases++;
  }
  return numIncreases;
}

