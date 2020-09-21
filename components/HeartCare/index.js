import React from 'react';

const HeartCare = (heart, care) => {
  var heart = document.querySelectorAll('[data-heart]');
  var care = document.querySelectoryAll('[data-care]');
  if (heart.length > 0) {
    result = care;
  } else {
    result = nocare;
  }

  return result;
};

export default HeartCare;
