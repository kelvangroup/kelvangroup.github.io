const enabledStates = [
  'NE',
  'TX',
  'MN',
  'IA',
  'MO',
  'LA',
  'WI',
  'IL',
  'MS',
  'MI',
  'OH',
  'KY',
  'TN',
  'WV',
  'ME',
  'VT',
  'NH',
  'MA',
  'CT',
  'PA',
  'NJ',
  'MD',
  'VA',
  'NC',
  'SC',
  'FL',
];

enabledStates.forEach((state) => {
  const stateElement = document.getElementById(state);
  stateElement.classList.add('enabled');
});

// const description = document.querySelector('.description');

// document.querySelectorAll('.state').forEach(function (el) {
//   el.addEventListener('mouseover', onMouseOver);
//   el.addEventListener('mouseout', onMouseOut);
//   function onMouseOver() {
//     description.classList.add('active');
//     description.innerHTML = el.querySelector('title').innerHTML;
//   }
//   function onMouseOut() {
//     description.classList.remove('active');
//   }
// });

// document.addEventListener('mousemove', function (e) {
//   description.style.left = `${e.pageX}px`;
//   description.style.top = `${e.pageY - 52}px`;
// });
