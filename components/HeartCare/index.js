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

const HeartCare = (heart, care) => {
  var heart = document.getElementById('heart').elements;
  var care = document.getElementById('care').elements;
  var nocare = document.getElementById('nocare').elements;
  if (heart.length > 0) {
    result = care;
  } else {
    result = nocare;
  }

  return result;
};

return (
  <form action="#" method="post" onSubmit={HeartCare}>
    <ul>
      <label>What did you do for self care today?</label>
      <li>
        <textarea id="heart" name="heart" rows="5" cols="33"></textarea>
      </li>
      <li>
        <button type="submit">Click</button>
      </li>
    </ul>
  </form>
);
