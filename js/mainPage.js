function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

window.onload = () => {
  const mainPage = document.querySelector('.main-page');

  const hiddenItemsDOM = mainPage.querySelectorAll('.show-false');

  const hiddenItems = [];

  hiddenItemsDOM.forEach(x => hiddenItems.push(x));

  sleep(2000).then(() => {
    hiddenItems.reduce((previousPromise, nextItem) => {
      return previousPromise.then(() => {
        nextItem.classList.add('show-true');
        nextItem.classList.remove('show-false');
        return sleep(1000);
      });
    }, Promise.resolve());
  });
}
